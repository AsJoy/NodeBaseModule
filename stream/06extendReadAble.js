"use strict";
const stream = require("stream");

class MyStream extends stream.Readable {

    constructor(){
        this.arr = ["niu", "yuan", "qiang"];
        this._index = 0;
    }
    _read(){
        if (this._index > this.arr.length) {
           this.push(null);
        } else {
            this.push( this._index++ );
        }
    }
}

/* 指定默认输出 */
export default MyStream;