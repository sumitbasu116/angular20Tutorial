import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {

  firstName: string ="Sumit";
  productName = 'Moto';
  courseName = signal<string>('Angular');
  courseDuration = signal('15 Videos');

  constructor(){
    this.firstName = 'Sumit';
    this.courseName.set('React');
  }
}
