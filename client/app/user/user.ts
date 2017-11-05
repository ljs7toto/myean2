export class User {
    userNo : number = 0;
    userId : string = '';
    userName: string = '';
    userPwd : string = '';
    complete: boolean = false;

    constructor(values:Object = {}){
        Object.assign(this, values);
    }
    
    setUserNo(userNo:number):void{
        this.userNo = userNo;
    }
}


//인터페이스 
// assign set을 안하고 바로 key을 받아서 