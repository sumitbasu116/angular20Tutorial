import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Master {

  constructor() { }

  getSum(num1: number,num2: number){
    debugger;
    const res = num1 + num2;
    return res;
  }
}
