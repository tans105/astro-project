import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { AppService } from "../../app.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    brand: string;

    constructor(private appService: AppService) {
        this.appService.readAssets("common").subscribe(data => {
            this.brand = data.brand;
        });
    }

    ngOnInit(): void {
    }

    chooseLanguage(lang) {
        this.appService.setLanguage(lang);
        location.reload();
    }
}
