import {Email} from "./email.model";

export interface QueryEmail extends Email{
    dob: string;
    pob: string;
    secondary: string;
    primary: string;
    sob: string;
    fname: string;
    questions: [];
    amount: number;
    service: string;
}