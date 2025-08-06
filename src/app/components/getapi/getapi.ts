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

  ngOnInit(): void {
    debugger;
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
        debugger;
        this.todoList = res;
      }
    );
  }
}
