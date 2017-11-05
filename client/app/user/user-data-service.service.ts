import { Injectable } from '@angular/core';
import { Http,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'
import { User } from './user';

@Injectable()
export class UserDataServiceService {
  userList: Array<User> = [];
  lastUserNo: number = 0;
  usersUrl: string = "api/users";
  constructor(private _http: Http) { 

    // let testUser : User = new User({
    //   userId : "test1",
    //   userName : "테스트1",
    //   userNo : 1,
    //   complete:true,
    //   userPwd : "test1"
    // });
    // this.userList.push(testUser);

    // this.userList.push({
    //   userId : "test2",
    //   userName : "테스트2",
    //   userNo : 2,
    //   complete:true,
    //   userPwd : "test2"
    // });
    // this.userList.push({
    //   userId : "test3",
    //   userName : "테스트3",
    //   userNo : 3,
    //   complete:false,
    //   userPwd : "test3"
    // });

  }

  getUserList():Array<User>{
    return this.userList;
  }

  addUser(user:User): UserDataServiceService{
    this.lastUserNo++;
    user.setUserNo(this.lastUserNo);
    let tUser =  new User(user); //메모리를 생성 해서 자기를 넣어주고 
    this.userList.push(tUser);
    return this;
  }
  
  getUsers():Observable<User[]> {
    return this._http.get(this.usersUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json();
    return res.json() || {};
  }

  private handleError(error: Response | any){
    let errMsg :string =  "error";
    console.log(errMsg);
    return Promise.reject(errMsg);
  }
}



