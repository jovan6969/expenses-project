import { Component, inject, input, signal, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../welcome/user.service';
import { ExpensesService } from '../expense.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-expense',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-expense.component.html',
  styleUrl: './new-expense.component.css'
})
export class NewExpenseComponent {

 // private form = viewChild.required<NgForm>('form');

 id = input.required<number>()

  name = signal<string>('');
  role  = signal<'Personal' | 'General'>('Personal');
  price = signal<number>(0);

  private service = inject(ExpensesService);
  private route = inject(ActivatedRoute);
  private router = inject(Router)


  onClose(){
    this.service.closeDialog();
    this.router.navigate(['../'], {relativeTo : this.route})
  }
  

  onSubmit( form : NgForm){

   const expense = {
      name : this.name(),
      role : this.role(),
      price : this.price(),
      id : this.id()
   }

   this.service.getExpenses(expense);
   
   console.log();
   
   

    form.reset()


}
}