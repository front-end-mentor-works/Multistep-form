export interface Plan {
    name:string;
    text:string;
    price:string;
    icon:string;
}
export interface plans {
    'monthly': Plan[];
    'yearly': Plan[];
}