import { Component, OnInit } from '@angular/core';
import { AppService } from "../../services/app.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    year = new Date().getFullYear();
    contentLoaded: boolean;
    common: {
        brand: ""
    };

    constructor(private appService: AppService) {
        this.populateContent();
    }

    populateContent() {
        this.appService.readAssets("common", this.assetCallback.bind(this));
    }

    assetCallback(type, data) {
        this.common = data;
        this.contentLoaded = true;
    }
}
