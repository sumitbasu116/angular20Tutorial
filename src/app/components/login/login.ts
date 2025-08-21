import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginObj:any={
    username: '',
    password:''
  }

  router = inject(Router);

  onLogin(){
    if(this.loginObj.username == 'Admin' &&
      this.loginObj.password == '112233'){
      this.router.navigateByUrl("admin");
      localStorage.setItem('Angular20User',this.loginObj.username);
    } else{
      alert('Wrong user name OR password');
    }
  }
}
