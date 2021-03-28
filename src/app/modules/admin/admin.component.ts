import {Component} from '@angular/core';
import {QueriesService} from "../../services/queries.service";
import {AuthenticateService} from "../../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
    queries = [];
    currentUser;

    constructor(private queriesService: QueriesService,
                private authService: AuthenticateService,
                private toastr: ToastrService,
                private appService: AppService,
                private router: Router) {
        queriesService.getQueries()
            .subscribe((response) => {
                this.queries = response;
                this.currentUser = this.authService.getCurrentUser();
            }, err => {
                if(err.isExpired) {
                    this.router.navigate(['/login']);
                    this.toastr.warning(this.appService.getMessage('loginAgain'), 'Warning');
                }
            })
    }

    logout() {
        this.authService.logout();
        this.toastr.success(this.appService.getMessage('logoutSuccess'), 'Success');
    }
}
