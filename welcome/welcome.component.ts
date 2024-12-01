import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [UsersComponent, NewUserComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
