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

    constructor(private appService: AppService, private router: Router) {
        this.appServices = appService.getModuleList();
    }

    ngOnInit(): void {
    }

    loadService(selectedService) {
        this.router.navigateByUrl(selectedService.name).then(function(){
            //
        });
    }

}
