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
    allQueries = [];
    currentUser;
    RESOLVED = 'RESOLVED';
    ACK = 'ACK';
    REJECT = 'REJECT';
    NEW = 'NEW';
    ALL = 'ALL';
    currentFilter = this.ALL;
    filter = [
        this.ALL,
        this.RESOLVED,
        this.ACK,
        this.REJECT,
        this.NEW
    ];

    constructor(private queriesService: QueriesService,
                private authService: AuthenticateService,
                private toastr: ToastrService,
                private appService: AppService,
                private router: Router) {
        this.getQueries();
    }

    getQueries() {
        this.queriesService.getQueries()
            .subscribe((response) => {
                this.allQueries = response;
                this.queries = (this.currentFilter === this.ALL)
                    ? this.allQueries
                    : this.allQueries.filter(query => query.status === this.currentFilter)
                this.currentUser = this.authService.getCurrentUser();
            }, err => {
                if (err.isExpired) {
                    this.router.navigate(['/login']);
                    this.toastr.warning(this.appService.getMessage('loginAgain'), 'Warning');
                }
            })
    }

    logout() {
        this.authService.logout();
        this.toastr.success(this.appService.getMessage('logoutSuccess'), 'Success');
    }

    updateStatus(q: any, status, acc) {
        this.queriesService.updateStatus(q.id, status)
            .then(
                res => {
                    this.getQueries();
                    acc.expand('toggle-'+q.id)
                },
                err => console.log(err)
            )
    }

    getBadge(status: string) {
        let badgeClass = 'badge badge-pill ';

        switch (status) {
            case this.REJECT: {
                badgeClass += 'badge-danger'
                break;
            }
            case this.ACK: {
                badgeClass += 'badge-success'
                break;
            }
            case this.RESOLVED: {
                badgeClass += 'badge-info'
                break;
            }
            default: {
                badgeClass += 'badge-primary'
            }
        }

        return badgeClass
    }

    canShowResolved(status) {
        return status === this.ACK || status === this.NEW
    }

    canShowReject(status) {
        return status === this.NEW || status === this.ACK
    }

    canShowAck(status) {
        return status === this.NEW
    }

    onFilterSelect(event) {
        this.currentFilter = event.target.value;

        this.queries = (this.currentFilter === this.ALL)
            ? this.allQueries
            : this.allQueries.filter(query => query.status === this.currentFilter)
    }

    panelClicked(id, acc) {
        acc.toggle('toggle-'+id)
    }
}
