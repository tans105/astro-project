import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Login} from "../../model/login.model";
import {AuthenticateService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-admin',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm: Login;
    disableForm: boolean;

    constructor(private authenticateService: AuthenticateService,
                private router: Router) {
        if (this.authenticateService.isAuthenticated()) {
            this.router.navigate(['/admin']);
        }
    }

    onSubmit(f: NgForm) {
        this.loginForm = f.value as Login;
        this.disableForm =  true;
        this.authenticateService.authenticate(this.loginForm).subscribe(res => {
            this.disableForm = false;
            this.authenticateService.onLoginSuccess(this.loginForm.email, res['token']);
        }, err => {
            this.authenticateService.onLoginFail()
            this.disableForm = false;
        })
    }

    socialLogin() {
        this.authenticateService.socialAuthenticate();
    }
}
