import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "./app.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private _orderAPI = '/order/make';
    private _verifyOrderAPI = '/order/verify'

    constructor(private http: HttpClient, private appService: AppService) {
    }

    makeOrder(orderPayload): Observable<any> {
        if (orderPayload && orderPayload.amount === 'Free Trial') orderPayload.amount = 0;
        return this.http.post(this.appService.getBaseServerURL() + this._orderAPI, orderPayload);
    }

    verifyOrder(paymentResponse): Observable<any> {
        return this.http.post(this.appService.getBaseServerURL() + this._verifyOrderAPI, paymentResponse);
    }

    updateOrder(orderId, uuid) {
        localStorage.setItem(orderId, uuid);
    }

    getOrder(orderId) {
        return localStorage.getItem(orderId)
    }
}
