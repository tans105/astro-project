import { Component, OnInit } from '@angular/core';
import { AppService } from "../../services/app.service";
import { NgForm } from "@angular/forms";
import { User } from "../../model/user.model";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    detailsContent = [];
    contentLoaded = false;

    constructor(private appService: AppService) {
        this.populateContent();
    }

    populateContent() {
        this.appService.readAssets("detail-cards", false, (content, data) => {
            this.detailsContent = data;
            this.contentLoaded = true;
        });
    }

    ngOnInit(): void {
    }
}
