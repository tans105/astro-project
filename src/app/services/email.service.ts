import { Injectable } from '@angular/core';
import { User } from "../model/user.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    //TODO: Make this generic based on the environment
    private baseUrl = 'http://localhost:8000';
    private emailAPI = '/api/sendEmail';

    constructor(private http: HttpClient) {
    }

    send(user: User): Promise<any>{
        return this.http.post(this.baseUrl + this.emailAPI, user).toPromise();
    }
}
