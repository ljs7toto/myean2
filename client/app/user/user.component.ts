import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data-service.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  template: require('./user.component.html'),
  providers:[UserDataService]
})
export class UserComponent implements OnInit {
  userList : Array<User> = [];
  searchUser : User = new User();
  errorMsg :string = "";
  addUserShow : boolean = false;
  addUserBtnStr: string = 'Show Add User Div';
  title:string = 'User List';
  
  constructor(private uds: UserDataService ) { }

  ngOnInit() {
    
  }
  outputTest(isTest:boolean){
    alert(isTest);
  }

  showHideAddUserDiv():void{
    this.addUserBtnStr = 'Show Addd User Div';
    this.addUserShow = !this.addUserShow;
    if(this.addUserShow){
      this.addUserBtnStr = 'Hide Add User Div';
    }
  }



  getUsers():void{
    this.uds.getUsers(this.searchUser).subscribe(
      datas => {
        console.log(datas);
        this.userList = datas["list"];
      },
      error => {
        this.errorMsg = <any>error;
        alert(this.errorMsg);
      });
  }

  addUser(user:User):void{
    console.log(user);
  }

}


