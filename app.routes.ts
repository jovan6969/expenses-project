import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { NewExpenseComponent } from './expenses/new-expense/new-expense.component';

export const routes: Routes = [



    {
        path : '',
        component : WelcomeComponent
    },

    {

    path : 'users/:id/expenses',
        component : ExpensesComponent,
        children : [
            {
                path : 'newExpense',
                component : NewExpenseComponent
            }
        ]
    },
    



    {
        path : '**',
        component : NotfoundComponent
    }
];
