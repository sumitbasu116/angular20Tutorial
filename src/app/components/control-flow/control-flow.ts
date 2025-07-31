import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {

  isVisiblePara: boolean = false;

  name: string = 'feb';

  cityList: string[] = ["Pune","Mumbai","Nagpur","Manipal"];

  showP() {
    this.isVisiblePara = true
  }
  hideP() {
    this.isVisiblePara = false
  }
}