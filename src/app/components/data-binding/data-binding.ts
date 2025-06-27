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

  constructor(){
    
  }
}
