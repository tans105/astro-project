import { Component, OnInit } from '@angular/core';
import { AppService } from "../../services/app.service";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    detailsContent: {
        getStarted: any;
        title: any;
        cards: any;
    };
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
