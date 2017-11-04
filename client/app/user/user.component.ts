import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: require('./user.component.html')
})
export class UserComponent implements OnInit {
  userName: string = "";
  userAge: number = 0;
  // userNameList : Array<string> = ["홍길동", "이길동", "테스트"]
  userNameList : Array<Object> = [ 
  {userName:"홍길동", 
  userNo : 6,
  userId : "tt2",
  userPwd : "1",
  userAge:20
  }
  ];

  userNum : number = 0;
  constructor() { }

  ngOnInit() {
    
  }
  // addUser(userName:string):void{
  //   this.userName = userName;
  //   this.userNameList.push(userName);
  // }

  /**이름만 있을때 그냥 array<string>*/
  // addUser():void{
  //   this.userNameList.push(this.userName);
  //   console.log(this.userNameList);
  // }

  // updateUser():void{ 
  //   this.userNameList[this.userNum]
  //   = this.userName;
  //   alert("수정 완료");
  // }
  
    addUser():void{
    this.userNameList.push({name: this.userName, age:this.userAge});
    console.log(this.userNameList);
  }
  
  updateUser():void{ 
    this.userNameList[this.userNum]
    = {name: this.userName, age:this.userAge};
    alert("수정 완료");
  }

  // deleteUser():void{ 
  //   var deleteName =  this.userNameList[this.userNum];
  //   alert(deleteName + " 님 삭제 완료");
  //   this.userNameList.splice(this.userNum, 1);
  // }

  deleteUser(): void{ 
    let delObj: Object = this.userNameList[this.userNum];
    alert(delObj["name"] + " 님 삭제 완료");
    this.userNameList.splice(this.userNum, 1);
  }

}
