import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Email} from "../model/email.model";

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    private baseUrl = (environment.production) ? 'https://astroproject-server.herokuapp.com' : 'http://localhost:8000';
    private emailAPI = '/api/sendEmail';

    constructor(private http: HttpClient) {
    }

    send(emailPayload: Email): Promise<any>{
        return this.http.post(this.baseUrl + this.emailAPI, emailPayload).toPromise();
    }
}
