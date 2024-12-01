import { AfterContentChecked, AfterViewInit, Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { ExpensesService } from '../expense.service';
import { Expense } from '../../user.model';
import { UserService } from '../../welcome/user.service';

@Component({
  selector: 'app-user-expenses',
  standalone: true,
  imports: [],
  templateUrl: './user-expenses.component.html',
  styleUrl: './user-expenses.component.css'
})
export class UserExpensesComponent implements AfterViewInit{
 
  id = input.required<number>()
  private Eservice = inject(ExpensesService);
  private service = inject(UserService)
  expense = input.required<Expense>();
  price  = input.required<number>()
  // create a new component to hold the total value and display it as a child component in the expenses
  total = signal<number>(0)

  

ngAfterViewInit(): void {
    this.total.update(currentTotal => currentTotal + this.price())
}







  name = computed(() => {
    const numericId = Number(this.id());
   
  
    const user = this.service.User.find(u => u.id === numericId);
  
  
  
    return user?.name;
  });
  
  
  
  adult = computed(() => {
    const numericId = Number(this.id());
   
  
    const user = this.service.User.find(u => u.id === numericId);
  
  
  
    return user?.role;
  });
  
  adultInc = computed(() => {
    const numericId = Number(this.id());
   
  
    const user = this.service.User.find(u => u.id === numericId);
  
  
  
    return user?.income;
  });
  
  
 
  
  
}
