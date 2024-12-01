import { Component, inject } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserService } from '../user.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  private service = inject(UserService)
 get users (){
   return this.service.User
 }

 onDeleteUsers(){
    this.service.clearUsers()
 }
// users : User[] = this.Uservice.User;
}
