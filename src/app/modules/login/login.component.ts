import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Login} from "../../model/login.model";
import {AuthenticateService} from "../../services/auth.service";

@Component({
    selector: 'app-admin',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm: Login;

    constructor(private authenticateService: AuthenticateService) {
    }

    onSubmit(f: NgForm) {
        this.loginForm = f.value as Login;
        this.authenticateService.authenticate(this.loginForm);
    }

    socialLogin() {
        this.authenticateService.socialAuthenticate();
    }
}
