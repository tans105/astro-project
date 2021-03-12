import {Login} from "../model/login.model";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = false;

    isAuthenticated() {
        return this.isLoggedIn;
    }

    authenticate(payload: Login) {
        return new Promise((resolve) => {
            if (payload.userid == 'test') {
                this.isLoggedIn = true;
                resolve(true);
            } else {
                resolve(false);
            }
        })
    }
}