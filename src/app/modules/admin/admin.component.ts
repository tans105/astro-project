import {Component, OnInit} from '@angular/core';
import {QueriesService} from "../../services/queries.service";
import {AuthenticateService} from "../../services/auth.service";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
    queries = [];
    currentUser;

    constructor(private queriesService: QueriesService,
                private authService: AuthenticateService) {
        queriesService.getQueries()
            .subscribe((response) => {
                console.log(response);
                this.queries = response;
                this.currentUser = this.authService.getCurrentUser();
            })
    }

    logout() {
        this.authService.logout();
    }
}
