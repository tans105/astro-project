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
    aboutUs: {
        para: any;
        title: any;
    };
    aboutUsTitle: {};
    aboutUsContent: {};
    tileContent1: {};
    tileContent2: {};
    lang: string;

    constructor(private appService: AppService, private router: Router) {
        this.appServices = appService.getModuleList();
        this.lang = this.appService.getLanguage();
        this.getAboutContent();
        this.getTileContent();
    }

    ngOnInit(): void {
    }

    loadService(selectedService) {
        this.router.navigateByUrl(selectedService.name).then(function () {
        });
    }

    getAboutContent() {
        this.aboutUs = this.appService.getAboutUs();
        this.aboutUsTitle = (this.lang === 'en') ? this.aboutUs.title['en'] : this.aboutUs.title['hi'];
        this.aboutUsContent =  (this.lang === 'en') ? this.aboutUs.para['en'] : this.aboutUs.para['hi'];
    }

    getTileContent() {
        let lang = this.appService.getLanguage();
        this.tileContent1 = this.appService.getTileContent()['set1'];
        this.tileContent2 = this.appService.getTileContent()['set2'];
    }

}
