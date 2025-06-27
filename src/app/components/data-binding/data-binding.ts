import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
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

  onCityChange(){
    alert("City Changed");
  }

  showAlert(){
    alert("This is Angular 20 Tutorial");
  }

  changeCourse(){
    this.courseName = "React JS Tutorial";
  }

  constructor(){
    
  }
}
