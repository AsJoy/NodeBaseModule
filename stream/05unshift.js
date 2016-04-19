"use strict";
// Pull off a header delimited by \n\n
// use unshift() if we get too much
// Call the callback with (error, header, stream)
const StringDecoder = require('string_decoder').StringDecoder;
const  fs = require("fs").createReadStream("1.txt");
function parseHeader(stream, callback) {
    stream.on('error', callback);
    stream.on('readable', onReadable);
    var decoder = new StringDecoder('utf8');
    var header = '';

    function onReadable() {
        var chunk;
        while (null !== (chunk = stream.read())) {
            var str = decoder.write(chunk)

            if (str.match(/\r\n\r\n/)) {
                // found the header boundary
                var split = str.split(/\r\n\r\n/);
                header += split.shift();
                var remaining = split.join('\r\n\r\n');
                var buf = new Buffer(remaining, 'utf8');
                console.log(buf+"")
                if (buf.length)
                    stream.unshift(buf);
                stream.removeListener('error', callback);
                stream.removeListener('readable', onReadable);
                // now the body of the message can be read from the stream.
                callback(null, header, stream);
            } else {
                // still reading the header.
                header += str;
            }
        }
    }
}
parseHeader(fs,function(){
    console.log(1)
})


