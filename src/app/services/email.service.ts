import { Injectable } from '@angular/core';
import { User } from "../model/user.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    constructor(private http: HttpClient) {
    }

    send(user: User) {
        return this.http.post('http://localhost:8080/sendEmail', user).subscribe((response: Response) => {
            console.log(response);
        })
    }
}
