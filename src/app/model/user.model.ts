import {Email} from "./email.model";

export interface QueryEmail extends Email{
    dob: string;
    pob: string;
    secondary: string;
    primary: string;
    latitude: string;
    longitude: string;
    fname: string;
    questions: [];
}