import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {

  isVisiblePara: boolean = false;

  showP() {
    this.isVisiblePara = true
  }
  hideP() {
    this.isVisiblePara = false
  }
}