import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    appServices = [];

    constructor(private appService: AppService) {
        this.appServices = appService.getModuleList();
    }

    ngOnInit(): void {
    }

    loadService(selectedService) {
        console.log(selectedService);
    }

}
