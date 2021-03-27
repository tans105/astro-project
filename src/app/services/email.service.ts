import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Email} from "../model/email.model";
import {AppService} from "./app.service";

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    private emailAPI = '/mail/sendEmail';

    constructor(private http: HttpClient, private appService: AppService) {
    }

    send(emailPayload: Email): Promise<any>{
        return this.http.post(this.appService.getBaseServerURL() + this.emailAPI, emailPayload).toPromise();
    }
}
