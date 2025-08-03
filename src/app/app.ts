import { Component } from '@angular/core';
import { ControlFlow } from './components/control-flow/control-flow';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ControlFlow, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
