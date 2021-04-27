import {Email} from "./email.model";

export interface QueryEmail extends Email{
    dob: string;
    pob: string;
    sob: string;
    tob: string;
    fname: string;
    dob_2: string;
    pob_2: string;
    sob_2: string;
    tob_2: string;
    fname_2: string;
    secondary: string;
    primary: string;
    questions: [];
    amount: number;
    service: string;
}