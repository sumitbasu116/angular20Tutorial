import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';

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
  masterService = inject(Master);

  ngOnInit(): void {
    this.getUsers();
    debugger;
    const result = this.masterService.getSum(20,50);
  }

  getUsers() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe(
      (res: any) => {
        this.userList = res;
      }
    );
  }
  onSaveUser() {
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userObj).subscribe(
      {
        next: (res) => {
          alert("User Created Success.");
          this.getUsers();
        },
        error: (error) => {
          debugger;
          alert("Error-" + error.error);
        }
      }
    );
  }

  onUpdateUser() {

    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" +
      this.userObj.userId, this.userObj).subscribe(
        {
          next: (res) => {
            alert("User Updated Success.");
            this.getUsers();
          },
          error: (error) => {
            alert("Error-" + error.error);
          }
        }
      )
  }

  onEdit(item: any) {
    this.userObj = item;
  }
  onDelete(id: number) {
   const isDelete = confirm("Are you sure want to delete?");
   if(isDelete){
    this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" +
      id).subscribe(
        {
          next: (res) => {
            alert("User Deleted Success.");
            this.getUsers();
          },
          error: (error) => {
            alert("Error-" + error.error);
          }
        }
      )
   }
    
  }
  onReset() {
    this.userObj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    };
  }
}