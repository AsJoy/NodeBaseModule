/**
 * Created by Administrator on 2016/3/18.
 */
//console.log(process.argv) //���node�ı����� ����
//console.log(process.env) // �����ǰ�Ļ�������
//console.log(process.env.path)
console.log(process.cwd()===__dirname)// process.cwd() ��ʾ�ĵ�ǰ�Ĺ���Ŀ¼
process.chdir("../")//�޸ĵ�ǰ�Ĺ���Ŀ¼
console.log(process.cwd()===__dirname)
console.log(process.pid)
console.log(process.title)//���øý��̵ĳ���
console.log('This platform is ' + process.platform);
