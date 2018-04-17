import {AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,/* AfterViewInit, AfterViewChecked */OnDestroy{

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('child2被销毁了');
  }


  //
  // ngAfterViewChecked(): void {
  //   console.log('子组件的视图变更完毕');
  //
  // }
  //
  // ngAfterViewInit(): void {
  //   console.log('子组件的视图初始化完毕');
  // }


  // greeting(name: string) {
  //   // setInterval(() => {
  //   //   console.log('hello' + name);
  //   // }, 3000);
  //
  // }

}
