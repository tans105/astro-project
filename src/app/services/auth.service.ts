import {Login} from "../model/login.model";
import {Injectable} from "@angular/core";
import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {HttpClient} from "@angular/common/http";
import {AppService} from "./app.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})
export class AuthenticateService {
    private loginAPI = '/auth/login';


    constructor(private authService: SocialAuthService,
                private http: HttpClient,
                private appService: AppService,
                private router: Router,
                private cookieService: CookieService) {
    }

    authenticate(user: Login) {
        return this.http.post(this.appService.getBaseServerURL() + this.loginAPI, {
            user,
            isSocial: false
        });
    }

    socialAuthenticate() {
        return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
            .then(user => {
                if (user) {
                    this.http.post(this.appService.getBaseServerURL() + this.loginAPI, {
                        user,
                        isSocial: true
                    }).subscribe(res => {
                        localStorage.setItem('astro_access_token', res['token']);
                        this.cookieService.set("astro-user", user.firstName);
                        this.router.navigate(['/admin']);
                    }, err => {
                        console.log(err)
                    })
                }
            })
    }

    logout() {
        localStorage.removeItem('astro_access_token');
        this.router.navigate(['/login']);
    }

    isAuthenticated() {
        return (localStorage.getItem('astro_access_token') !== null);
    }

    getToken() {
        return (this.isAuthenticated()) ? localStorage.getItem('astro_access_token') : null;
    }

    getCurrentUser() {
        return this.cookieService.get('astro-user');
    }
}