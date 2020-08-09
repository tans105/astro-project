import { Component, OnInit } from '@angular/core';
import { AppService } from "./services/app.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    loading = false;

    constructor(private appService: AppService) {
        this.appService.loadingStarts.subscribe((status) => {
            this.loading = status;
        })
    }

    ngOnInit(): void {
        this.appService.getLanguage();
    }
}
