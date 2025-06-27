import { Component } from '@angular/core';
import { DataBinding } from './components/data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
