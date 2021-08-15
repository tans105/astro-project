import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "./app.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private orderAPI = '/order/make';
    private verifyOrderAPI = '/order/verify'

    constructor(private http: HttpClient, private appService: AppService) {
    }

    makeOrder(orderPayload): Observable<any> {
        if(orderPayload && orderPayload.amount === 'Free Trial') orderPayload.amount = 0;
        return this.http.post(this.appService.getBaseServerURL() + this.orderAPI, orderPayload);
    }

    verifyOrder(paymentResponse): Observable<any> {
        return this.http.post(this.appService.getBaseServerURL() + this.verifyOrderAPI, paymentResponse);
    }
}
