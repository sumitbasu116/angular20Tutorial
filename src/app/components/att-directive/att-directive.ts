import { NgClass, NgStyle } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{

  constructor(){
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  div1ClassName = signal<string>("");

  isDiv2Green = signal<boolean>(false);

  setBgClass(className:string){
    this.div1ClassName.set(className);
  }

  toggleDiv2Color(){
    this.isDiv2Green.set(!this.isDiv2Green());
  }
}
