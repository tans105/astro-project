import { Injectable } from '@angular/core';
import * as services from "../assets/services.json";
import * as about from "../assets/about.json";
import * as tiles from "../assets/tile-content.json";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    lang: string = 'en';

    constructor(private cookieService: CookieService) {
    }

    getModuleList() {
        return services["default"];
    }

    getAboutUs() {
        return about["default"];
    }

    getTileContent() {
        return tiles["default"];
    }

    setLanguage(lang) {
        this.cookieService.delete("astro-lang");
        this.cookieService.set("astro-lang", lang);
        this.lang = lang;
    }

    getLanguage() {
        let langStored = this.cookieService.get("astro-lang");
        if(langStored) this.lang  = langStored;

        return  this.lang;
    }
}
