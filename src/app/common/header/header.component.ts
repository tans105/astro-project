import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { AppService } from "../../app.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private appService: AppService) {
    }

    ngOnInit(): void {
    }

    chooseLanguage(lang) {
        this.appService.setLanguage(lang);
        location.reload();
    }
}
