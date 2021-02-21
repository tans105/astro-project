import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
    selector: 'app-language-widget',
    templateUrl: './language-widget.component.html',
    styleUrls: ['./language-widget.component.scss']
})
export class LanguageWidgetComponent {

    constructor(private appService: AppService) {
    }

    chooseLanguage(lang) {
        this.appService.setLanguage(lang);
        location.reload();
    }

}
