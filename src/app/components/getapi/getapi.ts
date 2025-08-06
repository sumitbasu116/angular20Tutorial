import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-getapi',
  imports: [],
  templateUrl: './getapi.html',
  styleUrl: './getapi.css'
})
export class Getapi {

  http = inject(HttpClient);

  userList: any[] =[];

  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe(
      (res:any)=>{
        this.userList = res;
      }
    );
  }
}
