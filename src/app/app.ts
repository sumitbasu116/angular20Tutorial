import { Component } from '@angular/core';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';

@Component({
  selector: 'app-root',
  imports: [User,Admin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20Tutorial';
}
