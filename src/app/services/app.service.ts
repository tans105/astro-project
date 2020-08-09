import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    lang: string = 'en';
    common: {};

    constructor(private cookieService: CookieService, private http: HttpClient) {
    }

    getConfig() {
        return this.common;
    }

    readAssets(content: string, callback) {
        this.getLanguage();
        let url, response;
        switch (content) {
            case "modules": {
                url = (this.lang === 'en') ? "../assets/i8n/en/services.json" : "../assets/i8n/hi/services.json";
                response = this.getJSON(url);
                break;
            }
            case "about": {
                url = (this.lang === 'en') ? "../assets/i8n/en/about.json" : "../assets/i8n/hi/about.json";
                response = this.getJSON(url);
                break;
            }
            case "tiles": {
                url = (this.lang === 'en') ? "../assets/i8n/en/tile-content.json" : "../assets/i8n/hi/tile-content.json";
                response = this.getJSON(url);
                break;
            }
            case "common": {
                url = (this.lang === 'en') ? "../assets/i8n/en/common.json" : "../assets/i8n/hi/common.json";
                response = this.getJSON(url);
                break;
            }
            case "detail-cards": {
                url = (this.lang === 'en') ? "../assets/i8n/en/detail-cards.json" : "../assets/i8n/hi/detail-cards.json";
                response = this.getJSON(url);
            }
        }

        return response.then((data) => {
            callback(content, data);
        });

    }

    setLanguage(lang) {
        this.cookieService.delete("astro-lang");
        this.cookieService.set("astro-lang", lang);
        this.lang = lang;
    }

    getLanguage() {
        let langStored = this.cookieService.get("astro-lang");
        if (langStored) this.lang = langStored;

        return this.lang;
    }

    getJSON(url): Promise<any> {
        return this.http.get(url).toPromise();
    }
}
