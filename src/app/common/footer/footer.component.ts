import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";

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
        this.getCommonContent();
    }

    getCommonContent() {
        this.appService.readAssets("common").subscribe(data => {
            this.common = data;
            this.contentLoaded = true;
        });
    }
}
