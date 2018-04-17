import {AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy/* OnChanges, DoCheck AfterContentInit, AfterContentChecked */{

  // ngOnChanges(changes: SimpleChanges): void {
  // console.log(JSON.stringify(changes, null, 2));
  // }
  //
  // @Input()
  // greeting: string;
  // @Input()
  // user: { name: string };
  //
  // oldUserName: string;
  // changeDetected: boolean = false;
  // noChangeCounter: number = 0;
  //
  // message: string = '初始化消息';

  constructor() {
  }

  ngOnInit() {
  }

  // ngDoCheck(): void {
  // if (this.user.name != this.oldUserName) {
  //   this.changeDetected = true;
  //   console.log('DoCheck:user.name从' + this.oldUserName + '：变为：' + this.user.name);
  //   this.oldUserName = this.user.name;
  //
  //   if (this.changeDetected) {
  //     this.noChangeCounter = 0;
  //   } else {
  //     this.noChangeCounter++;
  //     console.log('DoCheck:user.name没有变化时ngDoCheck方法已经被调用' + this.noChangeCounter + '次');
  //   }
  //   this.changeDetected = false;
  // }
  // }

  // ngAfterContentChecked(): void {
  //   console.log('子组件投影内容监测完毕');
  // }
  //
  // ngAfterContentInit(): void {
  //   console.log('子组件投影内容初始化完毕');
  // }

  ngOnDestroy(): void {
    console.log('child1被销毁了');
  }


}
