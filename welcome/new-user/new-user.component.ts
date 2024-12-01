import { Component, ElementRef, inject, signal, viewChild, ViewChild } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
  export class NewUserComponent {

  private form = viewChild.required<NgForm>('form');

  private idKey = 'userId';

  Uservice = inject(UserService);
  id : number = 1;


  name = signal('');
  role = signal<'Adult' | 'Child'>('Child');
  income = signal(0);
  img = signal('')

  constructor(){
    this.loadIdFromLocalStorage();
  }

  onSubmit(form : NgForm){
    if (form.invalid) {
      console.log('form is invalid');
      return;
    }

   

    const User = {
      name : this.name(),
      role : this.role(),
      income : this.income(),
      img : this.img(),
      id : this.id
    }
   
    this.id++
    
    this.Uservice.getUser(User);

   // console.log(User);
    

    form.reset()

    this.saveIdToLocalStorage();
  }

  get adult (){
    return this.role() === 'Adult'


  }

  private saveIdToLocalStorage() {
    localStorage.setItem(this.idKey, JSON.stringify(this.id));
  }

  private loadIdFromLocalStorage() {
    const savedId = localStorage.getItem(this.idKey);
    if (savedId) {
      this.id = JSON.parse(savedId);
    }
  }

} 
