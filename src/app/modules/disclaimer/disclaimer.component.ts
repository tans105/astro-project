import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
    selector: 'app-disclaimer',
    templateUrl: './disclaimer.component.html',
    styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent{
    contentLoaded: boolean;
    brand: any;
    data: any = {};

    constructor(private appService: AppService) {
        this.populateContent();
    }

    populateContent() {
        this.appService.getAssets().then((data) => {
            this.data = data;
            this.contentLoaded = true;
        });
    }

}
