
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
@Component({
  selector: 'app-reactive-user',
  imports: [],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css'
})
export class ReactiveUser implements OnInit {
  userList: any[] = [];
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  };
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe(
      (res: any) => {
        this.userList = res;
      }
    );
  }
}