import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Login} from "../../model/login.model";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-admin',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: Login;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit(f: NgForm) {
        this.loginForm = f.value as Login;
        this.authService.authenticate(this.loginForm)
            .then((loggedIn) => {
                if (loggedIn) this.router.navigate(['/admin']);
            });
    }

}
