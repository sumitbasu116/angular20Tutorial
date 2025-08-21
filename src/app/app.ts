import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  loggedInUserName: string = '';

  constructor(private masterService: Master){
    this.readLoggedData();//load the data on page reload
    this.masterService.onLogin.subscribe(res=>{
      this.readLoggedData();//load the data on login
    })
    
  }

  readLoggedData(){
    const loggedUserData = localStorage.getItem('Angular20User');
    if(loggedUserData!=null){
      this.loggedInUserName = loggedUserData;
    }
  }
}
