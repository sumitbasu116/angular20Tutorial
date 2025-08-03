import { JsonPipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle,UpperCasePipe,TitleCasePipe,SlicePipe,JsonPipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  constructor(){
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    //to trigger API call
    //to subscribe
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    //to deal with view child
    //to subscribe
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    //to restrict user for navigation
    //unsubscribe
  }

  div1ClassName = signal<string>("");

  isDiv2Green = signal<boolean>(false);

  firstName = signal<string>("Sumit");

  coursName = signal<string>("Angular 20 Tutorial");

  rollNumList = [10,11,12,13,14,15,16];

  stdentObj: any ={
    name:'Sumit',
    age: 24,
    state: 'WB'
  };

  setBgClass(className:string){
    this.div1ClassName.set(className);
  }

  toggleDiv2Color(){
    this.isDiv2Green.set(!this.isDiv2Green());
  }
}
