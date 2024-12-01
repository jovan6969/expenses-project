import { Injectable } from "@angular/core";
import { User } from "../user.model";
import { UsersComponent } from "./users/users.component";

@Injectable({
    providedIn : 'root'
})

export class UserService{




    private storageKey = 'userData';

    User : User[] = [];
    private dialog ! : HTMLDialogElement;


    constructor() {
        this.loadUsersFromLocalStorage(); 
      }
  
  

    

    getUser(User : {name : string, role : 'Adult' | 'Child', income? : number, img : string, id : number }) {
        this.User.push(User);
        this.saveUsersToLocalStorage();
       
    }

    private saveUsersToLocalStorage() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.User));
      }
      
      private loadUsersFromLocalStorage() {
        const savedUsers = localStorage.getItem(this.storageKey);
        if (savedUsers) {
          this.User = JSON.parse(savedUsers);
        }
      }

      clearUsers() {
        this.User = [];
        localStorage.removeItem(this.storageKey);
      }
    

      
   
}