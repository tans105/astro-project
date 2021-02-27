import {Component} from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
    selector: 'app-disclaimer',
    templateUrl: './disclaimer.component.html',
    styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent {
    private contentLoaded: boolean;
    private brand: any;

    constructor(private appService: AppService) {
        this.populateContent();
    }

    populateContent() {
        this.appService.readAssets("common", false, (content, data) => {
            this.brand = data.brand;
            this.contentLoaded = true;
        });
    }

}
