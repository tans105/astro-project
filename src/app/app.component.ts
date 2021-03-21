import { Component, OnInit } from '@angular/core';
import { AppService } from "./services/app.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    data : any = {}

    constructor(private appService: AppService) {
        window.scrollTo(0, 0)
    }

    async ngOnInit(): Promise<void> {
        this.appService.getLanguage();
        this.data = await this.appService.getAssets();
    }
}
