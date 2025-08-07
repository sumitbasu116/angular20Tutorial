import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{
  userList: any[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe(
    (res:any)=>{
      this.userList = res;
    }
    );
  }
}
