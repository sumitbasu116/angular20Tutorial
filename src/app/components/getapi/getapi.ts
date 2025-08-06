import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-getapi',
  imports: [],
  templateUrl: './getapi.html',
  styleUrl: './getapi.css'
})
export class Getapi implements OnInit{

  http = inject(HttpClient);

  userList: any[] =[];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe(
      (res:any)=>{
        this.userList = res;
      }
    );
  }
}
