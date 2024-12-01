import { AfterContentChecked, AfterViewInit, Component, computed, ElementRef, inject, input, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../welcome/user.service';
import { getLocaleMonthNames } from '@angular/common';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { ExpensesService } from './expense.service';
import { UserExpensesComponent } from './user-expenses/user-expenses.component';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [RouterLink, RouterOutlet, UserExpensesComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent implements AfterContentChecked, AfterViewInit{

  @ViewChild('dialog') dialog ! : ElementRef;
  failed = 'there was no expenses for this user'
  id = input.required<number>()
  private Eservice = inject(ExpensesService);
  private service = inject(UserService)

 // name = computed(() => this.service.User.find((u) => u.id === this.id())?.name);



  expense = computed(() => {
 // const numericId = Number(this.id());  // Assuming `this.id()` gets the ID from the route or some other source
 // return this.Eservice.expenses.filter(e => e.id === numericId);
 return this.Eservice.expenses
 });

 price = computed(() => {
 // const numericId = Number(this.id());  // Assuming `this.id()` gets the ID from the route or some other source
  // this.Eservice.expenses.filter(e => e.id === numericId);
 })
 
 //expense = this.Eservice.returnExpenseById(this.id())


ngAfterContentChecked(): void {
 // console.log(this.Eservice.expenses[4], "neso");
 // console.log(this.Eservice.expenses.);
// console.log(this.price());
 

  
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
 

  ngAfterViewInit(): void {
     
      this.Eservice.setDialog(this.dialog.nativeElement)
      
  }
  openDialog(){
  
    this.Eservice.openDialog()
   

  }
 
}

