import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Login} from "../../model/login.model";
import {AuthenticateService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AppService} from "../../services/app.service";
import {SocialAuthService, SocialUser} from "angularx-social-login";

@Component({
    selector: 'app-admin',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: Login;
    user: SocialUser;
    loggedIn;

    constructor(private authenticateService: AuthenticateService,
                private router: Router,
                private toastr: ToastrService,
                private appService: AppService) {
    }

    ngOnInit(): void {
    }

    onSubmit(f: NgForm) {
        this.loginForm = f.value as Login;
        this.authenticateService.authenticate(this.loginForm);
    }

    socialLogin() {
        this.authenticateService.socialAuthenticate();
    }
}
