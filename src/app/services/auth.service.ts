import {Login} from "../model/login.model";
import {Injectable} from "@angular/core";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthenticateService {
    private isLoggedIn: boolean = false;
    private loggedInUser: SocialUser;
    private whiteListedUsers = [];

    constructor(private authService: SocialAuthService) {
    }

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

    socialAuthenticate() {
        return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
            res => {
                return new Promise((resolve, reject) => {
                    if (res) {
                        if (!environment.production) {
                            if (res.email === 'tanmayawasthi105@gmail.com') {
                                this.loggedInUser = res;
                                this.isLoggedIn = true;
                                resolve(res);
                            } else {
                                reject(res);
                            }
                        } else {
                            if (res.email in this.whiteListedUsers) {
                                this.loggedInUser = res;
                                this.isLoggedIn = true;
                                resolve(res);
                            } else {
                                reject(res);
                            }
                        }
                    } else {
                        reject(res);
                    }
                })
            },
            err => {
                return new Promise((resolve, reject) => {
                    reject(err);
                })
            });
    }

    getWhiteListedUsers() {
        //TODO: call API to fetch whitelisted users from the database.
    }

    signOut(): void {
        this.authService.signOut();
    }
}