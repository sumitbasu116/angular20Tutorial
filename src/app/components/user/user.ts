import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
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
  onSaveUser() {
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register',this.userObj).subscribe(
      {
        next: (res) => {
          alert("User Created Success.");
          this.getUsers();
        },
        error: (error) => {
          debugger;
          alert("Error-"+error.error);
        }
      }
    );
  }

  onUpdateUser(){
    debugger;
  }

  onEdit(item:any){
    debugger;
    this.userObj = item;
  }
  onDelete(item:any){
    debugger;
    //this.userObj = item;
  }
  onReset(){
    this.userObj= {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  };
  }
}

