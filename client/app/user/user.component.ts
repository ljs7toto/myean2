import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from './user-data-service.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  template: require('./user.component.html'),
  providers:[UserDataServiceService]
})
export class UserComponent implements OnInit {
  userName: string = "";
  userAge: number = 0;
  // userNameList : Array<string> = ["홍길동", "이길동", "테스트"]
  userNameList : Array<Object> = [ 
  {userName:"홍길동", 
    userNo : 1,
    userId : "tt2",
    userPwd : "1",}
  ];
  errorMsg :string = "";
  userList : Array<User> = [ ];

  userNum : number = 0;
  constructor(private uds: UserDataServiceService ) { }

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

  selectUserList():void{
      //데이터 타입이 똑같기 때문에 = 가 먹힘
      this.userList = this.uds.getUserList();
    }
  
  addUser():void{
    // let uds2 : UserDataServiceService = 
    // this.uds.addUser({
    //   userId : "tt",
    //   userNo : 2,
    //   userPwd : "tt",
    //   userName : "tt",
    //   complete : true 
    // });
    // this.userList = uds2.userList;
    //   console.log(uds2.userList);
    //   console.log(this.userList);
    // this.userNameList.push({name: this.userName, age:this.userAge});
    // console.log(this.userNameList);
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

  outputTest(isTest:boolean){
    alert(isTest);
  }

  outputUser(user:User){
    let uds2 : UserDataServiceService = this.uds.addUser(user)
    this.userList = uds2.userList;
  }
  
  getUsers():void{
    this.uds.getUsers().subscribe(
      users => {
        this.userList = users
        console.log(users);
      },
      error => this.errorMsg = <any>error);
  }

}







// import { Component, OnInit } from '@angular/core';
// import { UserDataServiceService } from './user-data-service.service';
// import { User } from './user';

// @Component({
//   selector: 'app-user',
//   template: require('./user.component.html'),
//   providers:[UserDataServiceService]
// })
// export class UserComponent implements OnInit {
//   userName: string = "";
//   userAge: number = 0;
//   // userNameList : Array<string> = ["홍길동", "이길동", "테스트"]
//   userNameList : Array<Object> = [ 
//   {userName:"홍길동", 
//     userNo : 1,
//     userId : "tt2",
//     userPwd : "1",}
//   ];

//   userList : Array<User> = [
//     { userId : "test",
//       userName : "테스트",
//       userNo : 1,
//       complete : true,
//       userPwd : "test"
//     }
//   ];

//   userNum : number = 0;
//   constructor(private uds: UserDataServiceService ) { }

//   ngOnInit() {
    
//   }
//   // addUser(userName:string):void{
//   //   this.userName = userName;
//   //   this.userNameList.push(userName);
//   // }

//   /**이름만 있을때 그냥 array<string>*/
//   // addUser():void{
//   //   this.userNameList.push(this.userName);
//   //   console.log(this.userNameList);
//   // }

//   // updateUser():void{ 
//   //   this.userNameList[this.userNum]
//   //   = this.userName;
//   //   alert("수정 완료");
//   // }

//   selectUserList():void{
//       //데이터 타입이 똑같기 때문에 = 가 먹힘
//       this.userList = this.uds.getUserList();
//     }
  
//   addUser():void{
//     let uds2 : UserDataServiceService = 
//     this.uds.addUser({
//       userId : "tt",
//       userNo : 2,
//       userPwd : "tt",
//       userName : "tt",
//       complete : true 
//     });
//     this.userList = uds2.userList;
//       console.log(uds2.userList);
//       console.log(this.userList);
//     // this.userNameList.push({name: this.userName, age:this.userAge});
//     // console.log(this.userNameList);
//   }
  
//   updateUser():void{ 
//     this.userNameList[this.userNum]
//     = {name: this.userName, age:this.userAge};
//     alert("수정 완료");
//   }

//   // deleteUser():void{ 
//   //   var deleteName =  this.userNameList[this.userNum];
//   //   alert(deleteName + " 님 삭제 완료");
//   //   this.userNameList.splice(this.userNum, 1);
//   // }

//   deleteUser(): void{ 
//     let delObj: Object = this.userNameList[this.userNum];
//     alert(delObj["name"] + " 님 삭제 완료");
//     this.userNameList.splice(this.userNum, 1);
//   }

//   outputTest(isTest:boolean){
//     alert(isTest);
//   }

//   outputUser(user:User){
//     let uds2 : UserDataServiceService = this.uds.addUser(user)
//     this.userList = uds2.userList;
//   }
  
// }