import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppService} from "../../services/app.service";
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../services/order_service";

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SummaryComponent {
    data: any = {};
    contentLoaded: boolean;
    orderId: string;
    uuid: string;

    constructor(private appService: AppService,
                private route: ActivatedRoute,
                private orderService: OrderService) {
        this.populateContent();
        this.orderId = this.route.snapshot.paramMap.get('orderId');
        this.uuid = this.orderService.getOrder(this.orderId);
    }

    populateContent() {
        window.scrollTo(0, 0)
        this.appService.getAssets().then((data) => {
            this.data = data;
            this.contentLoaded = true;
        });
    }
}
