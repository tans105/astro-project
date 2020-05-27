import { Injectable } from '@angular/core';
import * as services from "../assets/services.json";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor() {
    }

    getModuleList() {
        return services["default"];
    }
}
