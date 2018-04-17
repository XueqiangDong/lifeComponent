import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

let logIndex: number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    this.logIt('name属性在constructor中的值是：' + name);
  }

  @Input()
  name: string;

  logIt(msg: string) {
    // let msgNew: string;
    // msgNew = '#' + logIndex++ + ',' + msg;
    // console.log(msgNew);
    console.log('#' + logIndex++ + ',' + msg);
  }

  ngOnInit() {
    this.logIt('ngOnInit');
  }

  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }

  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    let name = changes['name'].currentValue;
    this.logIt('name属性在ngOnChanges中的值是：' + name);
  }

  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }

}
