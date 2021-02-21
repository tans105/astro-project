import { Component, OnInit } from '@angular/core';
import { AppService } from "../../services/app.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    common: {
        brand: ""
    };
    contentLoaded: boolean;

    constructor(private appService: AppService) {
        this.populateContent();
    }

    populateContent() {
        this.appService.readAssets("common", false, this.assetCallback.bind(this));
    }

    assetCallback(type, data) {
        this.common = data;
        this.contentLoaded = true;
    }
}
