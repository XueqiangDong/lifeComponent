import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Child2Component} from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, /*AfterViewChecked */AfterContentInit, AfterContentChecked {

  // @ViewChild('child21')
  // child21: Child2Component;
  //
  message: string = 'Hello';

  // divContent = '<div>你好</div>';

  constructor() {
  }

  ngOnInit(): void {
    // this.child21.greeting('Tom');
  }

  // ngAfterViewChecked(): void {
  //   console.log('父组件的视图变更完毕');
  // setTimeout(() => {
  //   this.message = 'Hello';
  // }, 5000);
  // }

  ngAfterViewInit(): void {
    console.log('父组件的视图初始化完毕');
  }


  title = 'Tom';

  ngAfterContentChecked(): void {
    console.log('父组件投影内容监测完毕');
    this.message = 'Tom';
  }

  ngAfterContentInit(): void {
    console.log('父组件投影内容初始化完毕');
  }

  //
  // greeting: string = 'Hello';
  // user: { name: string } = {name: 'Tom'};
}

