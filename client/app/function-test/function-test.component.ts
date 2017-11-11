import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-test',
  template:require('./function-test.component.html'),
  styleUrls: ['./function-test.component.css']
})
export class FunctionTestComponent implements OnInit {
  private title:string = "함수 테스트"
  constructor() { }

  ngOnInit() {
  }

  //함수 선언 테스트 - 로컬 메모리에 올라가서 오류없이 실행
  testFunctionDeclaration(){
    test();
    function test():void{
      alert(1);
    }
  }

  //변수 대입 익명 함수 테스트- 메모리에 대입을 시키면 오류
  testAnonymoustExpression(){ 
    let test;
     try{
      test = function(){
        alert(2);
      }
     }catch(e){
       alert(e);
      //  test = function(){
      //   alert(2);
      // } //여기서는 실행이 됨
     }
     test();
  }

  //변수 대입 이름 함수 테스트 - 익명과 다를게 없음
  testNamedFunction(){ 
    let test;
     try{
      test = function test2(){
        alert(2);
      }
     }catch(e){
       alert(e);
     }
     test();
  }
  
}

//함수 선언과 함수대입의 차이점
