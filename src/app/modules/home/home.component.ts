import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    data: any = {}
    contentLoaded: boolean = false;
    lang: string

    constructor(private appService: AppService, private router: Router) {
        this.lang = this.appService.getLanguage();
    }

    async ngOnInit(): Promise<void> {
        this.data = await this.appService.getAssets();
        this.contentLoaded = true;
    }
}
