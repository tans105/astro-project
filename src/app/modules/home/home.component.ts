import { Component, OnInit } from '@angular/core';
import { AppService } from "../../services/app.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    appServices = [];
    aboutUs = {
        title: "",
        para: ""
    };
    tileContent: any;
    lang: string;
    common: {
        knowMore: "",
        whyChooseUs: ""
    };
    contentLoaded: boolean;
    moduleLoaded = 0;


    constructor(private appService: AppService, private router: Router) {
        this.lang = this.appService.getLanguage();
    }

    ngOnInit(): void {
        this.populateContent();
    }

    populateContent() {
        this.appService.readAssets("modules", false, this.assetCallback.bind(this));
        this.appService.readAssets("common", false, this.assetCallback.bind(this));
        this.appService.readAssets("about", false, this.assetCallback.bind(this));
        this.appService.readAssets("tiles", false, this.assetCallback.bind(this));
    }

    assetCallback(type, data) {
        switch (type) {
            case "modules": {
                this.appServices = data;
                break;
            }
            case "common" : {
                this.common = data;
                break;
            }
            case "about": {
                this.aboutUs = data;
                break;
            }
            case "tiles" : {
                this.tileContent = data;
            }
        }

        this.moduleLoaded++;
        if (this.moduleLoaded === 4) this.contentLoaded = true;
    }

}
