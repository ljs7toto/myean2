import { Component, OnInit } from '@angular/core';
import { ProLog } from './pro-log';

@Component({
  selector: 'app-promise-test',
  template: require('./promise-test.component.html'),
  styleUrls: ['./promise-test.component.css']
})
export class PromiseTestComponent implements OnInit {
  private title:string;
  logList:ProLog[];
  // logList:ProLog[] = [];

  constructor() { 
    this.title = "동기/비동기테스트";
    this.initLog();
    // this.logList=[];
  }
 
  private setLog(text:string){
    let log : ProLog = new ProLog();
    log.num = this.logList.length+1;
    log.text = text;
    this.logList.push(log);
  }

  private initLog(){
    this.logList = [];
  }

  ngOnInit() {
  }
  num : number = 0;
  setTime(text:string,time:number,func?:Function):void{
    setTimeout(()=>{
      this.setLog(text);
      if(func){
        func();
      }
    },time);
  }

  // getPromise(text:string, time:number,errorMsg?:string):Promise<{}>{

  // }

  testAsync():void{
    this.initLog();
    // setTimeout(this.setLog.bind(this,'test1'),1000);
    // this.setLog('test2');
    // this.setLog('test3');
    // this.setLog('test4');
    let test1 = ():void =>{
      this.setTime('test1',2000);
    }
    let test2 = ():void =>{
      this.setTime('test2', 1000);
    }
    let printLog = ():void =>{
      this.setLog("test1 and test2 done");
    }
    test1();
    test2();
    printLog();
  }
 
  testSync():void{
    this.initLog();
    let test1 = (func:Function):void =>{
      this.setTime('test1',2000,func);
    }
    let test2 = (func:Function):void =>{
      this.setTime('test2', 1000,func);
    }
    let printLog = ():void =>{
      this.setLog("test1 and test2 done");
    }
     test1(test2.bind(null, printLog));
  }

  testPromise():void{

  }

}
