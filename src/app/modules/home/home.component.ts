import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    appServices = [];
    aboutUsTitle: {};
    aboutUsContent: {};
    tileContent1: {};
    tileContent2: {};
    lang: string;
    common: {
        knowMore: "",
        whyChooseUs: ""
    };
    contentLoaded: boolean;


    constructor(private appService: AppService, private router: Router) {
        this.lang = this.appService.getLanguage();
    }

    ngOnInit(): void {
        this.populateContent();
    }

    populateContent() {
        this.getModules();
        this.getAboutContent();
        this.getTileContent();
        this.getCommonContent();
    }

    getModules() {
        this.appService.readAssets("modules").subscribe(data => {
            this.appServices = data;
        });
    }

    getCommonContent() {
        this.appService.readAssets("common").subscribe(data => {
            this.common = data;
            this.contentLoaded = true;
        });
    }

    getAboutContent() {
        this.appService.readAssets("about").subscribe(data => {
            this.aboutUsTitle = data.title;
            this.aboutUsContent =  data.para;
        });
    }

    getTileContent() {
        this.appService.readAssets("tiles").subscribe(data => {
            this.tileContent1 = data['set1'];
            this.tileContent2 = data['set2'];
        });
    }

}
