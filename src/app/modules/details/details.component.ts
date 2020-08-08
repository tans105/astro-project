import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";

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
        this.appService.readAssets("detail-cards", this.assetCallback.bind(this));
    }

    assetCallback(type, data) {
        this.detailsContent = data;
        this.contentLoaded = true;
    }

    ngOnInit(): void {
    }

}
