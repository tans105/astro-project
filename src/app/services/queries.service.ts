import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppService} from "./app.service";
import {AuthenticateService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class QueriesService {
    private queryAPI = '/api/queries';
    private updateStatusAPI = '/api/updateStatus/'


    constructor(private http: HttpClient,
                private appService: AppService,
                private authService: AuthenticateService) {
    }

    getHeaders() {
        const header = new HttpHeaders().set('Authorization', this.authService.getToken());
        return {headers: header};
    }

    getQueries(): Observable<any> {
        if (this.authService.isAuthenticated()) {
            return this.http.get(this.appService.getBaseServerURL() + this.queryAPI, this.getHeaders());
        } else {
            return null;
        }
    }

    updateStatus(id, status): Promise<any> {
        if (this.authService.isAuthenticated()) {
            return this.http.post(this.appService.getBaseServerURL() + this.updateStatusAPI,
                {id, status},
                this.getHeaders()).toPromise();
        } else {
            return null;
        }
    }
}
