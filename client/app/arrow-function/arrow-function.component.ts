import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-function',
  template: require( './arrow-function.component.html'),
  styleUrls: ['./arrow-function.component.css']
})
export class ArrowFunctionComponent implements OnInit {
  private title:string = "화살표 함수 테스트"
  text :string = "테스트";
  constructor() { }

  ngOnInit() {
  }

  testNormalFunction1(){
    alert(this.text);

    let test = function():void{
      alert(this.test); //자기 영역을 갖고 있기 때문에 여기 this는 다르다.
    }
    try{
      test();
    }catch(e){
      alert(e);
    }
  }

  testNormalFunction2(){
    let test = function(obj:any):void{
      alert(obj.text); //this 자체를 넘긴다
    }
   test(this);
  }

  testNormalFunction5(){
    let test = function():void{
      alert(this.text); 
    }
   test.call(this);
   //bind 와 실행까지 함 
  }

  testNormalFunction6():void{
    let test = ():void =>{
      alert(this.text);
    }
   test();
  }
}
