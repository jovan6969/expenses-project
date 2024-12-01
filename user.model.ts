export interface User {
    name : string,
    role : 'Adult' | 'Child',
    income? : number,
    img : string,
    id : number,
};

export interface Expense {
    name : string
    role : 'Personal' | 'General',
    price : number,
    id : number
   
}