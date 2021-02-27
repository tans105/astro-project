import {Email} from "./email.model";

export interface ContactUsEmail extends Email {
    feedback: string;
}