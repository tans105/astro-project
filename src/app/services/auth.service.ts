import {Login} from "../model/login.model";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

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
            if (environment.production) {
                //TODO: call the api to authenticate user.
            } else {
                if (payload.userid == 'test') {
                    this.isLoggedIn = true;
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        })
    }
}