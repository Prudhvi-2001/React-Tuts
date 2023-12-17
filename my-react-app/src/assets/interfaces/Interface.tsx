export interface User{
    id:number;
    name:string;
    email:string;
    phoneNumber:number;
}
export interface FormProps {
    onSubmit : (data : User) => void;
}
export interface Users {
    usersId:string[];
}
 export interface UsersFunction{
    onUsers:(data:Users)=>void
 }
 export interface ArrayMethods{
    usersNames:string[]
    grades:number[]
 }
export interface Jsonplaceholder{
    userId: number,
    id: number,
    title:string,
    body: string,
}