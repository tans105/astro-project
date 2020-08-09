import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
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
        this.appService.readAssets("common", this.assetCallback.bind(this));
    }

    chooseLanguage(lang) {
        this.appService.setLanguage(lang);
        location.reload();
    }

    assetCallback(type, data) {
        this.common = data;
        this.contentLoaded = true;
    }
}
