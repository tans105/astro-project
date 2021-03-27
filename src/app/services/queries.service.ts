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


    constructor(private http: HttpClient,
                private appService: AppService,
                private authService: AuthenticateService) {
    }

    getQueries(): Observable<any> {
        if(this.authService.isAuthenticated()) {
            const header = new HttpHeaders().set('Authorization', this.authService.getToken());
            const headers = {headers: header};
            return this.http.get(this.appService.getBaseServerURL() + this.queryAPI, headers);
        } else {
            return null;
        }
    }
}
