import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { AppService } from "../../app.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    common: {
        brand: ""
    };
    contentLoaded: boolean;

    constructor(private appService: AppService) {
        this.populateContent();
    }

    populateContent() {
        this.getCommonContent();
    }

    getCommonContent() {
        this.appService.readAssets("common").subscribe(data => {
            this.common = data;
            this.contentLoaded = true;
        });
    }

    ngOnInit(): void {
    }

    chooseLanguage(lang) {
        this.appService.setLanguage(lang);
        location.reload();
    }
}
