import { computed, Injectable } from "@angular/core";
import { Expense } from "../user.model";

@Injectable({
    providedIn : 'root'
})

export class ExpensesService{

  total ? :  number = 0;
    expenses : Expense[] = [];
  private  dialog ! : HTMLDialogElement 





  getPrice(price : number){
   // this.total += price;
  }

    getExpenses(expense : {name : string, role : 'General' | 'Personal', price : number, id : number}){
        this.expenses.push(expense)
    }


  //  returnExpenseById(id : number | undefined){
//
  //  return this.expenses.filter(e => e.id === id);
     
     
    
  //}

    
    setDialog(dialog: HTMLDialogElement) {
        this.dialog = dialog;
      }

      openDialog() {
        if (this.dialog) {
          this.dialog.showModal();
        } else {
          console.error('Dialog element is not set.');
        }
      }
    
      closeDialog() {
        if (this.dialog) {
          this.dialog.close();
        } else {
          console.error('Dialog element is not set.');
        }
      }
}