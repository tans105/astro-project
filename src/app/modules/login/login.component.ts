import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Login} from "../../model/login.model";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AppService} from "../../services/app.service";

@Component({
    selector: 'app-admin',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: Login;

    constructor(private authService: AuthService,
                private router: Router,
                private toastr: ToastrService,
                private appService: AppService) {
    }

    ngOnInit(): void {
    }

    onSubmit(f: NgForm) {
        this.loginForm = f.value as Login;
        this.authService.authenticate(this.loginForm)
            .then((loginSuccess) => {
                if (loginSuccess) {
                    this.router.navigate(['/admin']);
                } else {
                    this.toastr.warning(this.appService.getMessage('invalidCredentials'), 'Warning');
                }
            });
    }

}
