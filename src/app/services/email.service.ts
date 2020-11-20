import { Injectable } from '@angular/core';
import { User } from "../model/user.model";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    private baseUrl = (environment.production) ? 'https://astroproject-server.herokuapp.com' : 'http://localhost:8000';
    private emailAPI = '/api/sendEmail';

    constructor(private http: HttpClient) {
    }

    send(user: User): Promise<any>{
        console.log(environment);
        return this.http.post(this.baseUrl + this.emailAPI, user).toPromise();
    }
}
