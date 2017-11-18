export class User {
    userNo : number;
    userId : string;
    userName: string;
    userPwd : string;
    complete: boolean;
    token:string;
    constructor(values:Object = {}){
        Object.assign(this, values);
    }
}


//인터페이스 
// assign set을 안하고 바로 key을 받아서 