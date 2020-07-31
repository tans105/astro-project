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
    knowMore: string;
    whyChooseUs: string;


    constructor(private appService: AppService, private router: Router) {
        appService.readAssets("modules").subscribe(data => {
            this.appServices = data;
        });
        this.lang = this.appService.getLanguage();
        this.getAboutContent();
        this.getTileContent();
        this.appService.readAssets("common").subscribe(data => {
            this.knowMore = data.knowMore;
            this.whyChooseUs =  data.whyChooseUs;
        });
    }

    ngOnInit(): void {
    }

    loadService(selectedService) {
        this.router.navigateByUrl(selectedService.name).then(function () {
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
