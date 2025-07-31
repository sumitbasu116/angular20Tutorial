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

  studentList: any[] = [
    {name:"AAA",city:"Pune",isActive:false},
    {name:"BBB",city:"Mumbai",isActive:false},
    {name:"CCC",city:"Goa",isActive:true},
    {name:"DDD",city:"Ranchi",isActive:false}
  ];

  showP() {
    this.isVisiblePara = true
  }
  hideP() {
    this.isVisiblePara = false
  }
}