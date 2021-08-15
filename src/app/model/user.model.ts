import {Email} from "./email.model";

export interface QueryEmail extends Email{
    uuid: string;
    order_id: string;
    dob: string;
    pob: string;
    sob: string;
    tob: string;
    fname: string;
    dob_girl: string;
    pob_girl: string;
    sob_girl: string;
    tob_girl: string;
    fname_girl: string;
    secondary: string;
    primary: string;
    questions: [];
    amount: number;
    service: string;
}