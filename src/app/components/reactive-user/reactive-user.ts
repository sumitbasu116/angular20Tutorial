
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css'
})
export class ReactiveUser implements OnInit {
  userList: any[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }

  userForm: FormGroup= new FormGroup(
    {
      userId: new FormControl(0),
      emailId: new FormControl(""),
      mobileNo: new FormControl(""),
      password: new FormControl(""),
      fullName: new FormControl("")
    }
  );

  getUsers() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe(
      (res: any) => {
        this.userList = res;
      }
    );
  }
}