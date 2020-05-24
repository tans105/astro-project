import { Component } from '@angular/core';
import * as services from "../assets/services.json";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    appServices = [];

    constructor() {
        this.appServices = services["default"];
    }
}
