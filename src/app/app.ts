import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  loggedInUserName: string = '';

  constructor(){
    const loggedUserData = localStorage.getItem('Angular20User');
    if(loggedUserData!=null){
      this.loggedInUserName = loggedUserData;
    }
  }
}
