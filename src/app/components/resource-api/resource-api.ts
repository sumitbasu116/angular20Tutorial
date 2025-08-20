import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.html',
  styleUrl: './resource-api.css'
})
export class ResourceApi {

  userData = resource({
    loader: ()=>{
      return fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json());
    }
  })
}
