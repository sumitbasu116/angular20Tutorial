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
  todoList: any[] = [];
  busBookingUsers: any[] = [];
  ngOnInit(): void {
    this.getUsers();
    this.getTodoItems();
  }

  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe(
      (res:any)=>{
        this.userList = res;
      }
    );
  }

  getTodoItems(){
    this.http.get("https://jsonplaceholder.typicode.com/todos")
    .subscribe(
      (res:any)=>{
        this.todoList = res;
      }
    );
  }

  getAllBusbookingUsers(){
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers")
    .subscribe(
      (res:any)=>{
        this.busBookingUsers = res;
      }
    );
  }
}
