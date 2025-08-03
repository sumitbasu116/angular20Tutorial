import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective {

  div1ClassName = signal<string>("");

  setBgClass(className:string){
    this.div1ClassName.set(className);
  }
}
