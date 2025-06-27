import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  courseName: string = 'Angular 20 Tutorial';
  productPrice: number = 12500;

  maxChar: number = 5;

  minChar: number = 3;

  inputTypeRadio: string='radio';

  inputTypeCheck: string='checkbox';

  myClassName: string = 'myColor';

  constructor(){
    
  }
}
