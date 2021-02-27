import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    lang: string = 'en';
    assets: {};

    constructor(private cookieService: CookieService, private http: HttpClient) {
    }

    getConfig() {
        return this.assets["common"];
    }

    getMessage(messageId) {
        return this.assets["messages"][messageId];
    }

    readAssets(content: string, forced = false, callback) {
        this.getLanguage();
        let url, response;

        switch (content) {
            case "modules": {
                url = (this.lang === 'en') ? "../assets/i18n/en/services.json" : "../assets/i18n/hi/services.json";
                response = this.getJSON(url, content, forced);
                break;
            }
            case "about": {
                url = (this.lang === 'en') ? "../assets/i18n/en/about.json" : "../assets/i18n/hi/about.json";
                response = this.getJSON(url, content, forced);
                break;
            }
            case "tiles": {
                url = (this.lang === 'en') ? "../assets/i18n/en/tile-content.json" : "../assets/i18n/hi/tile-content.json";
                response = this.getJSON(url, content, forced);
                break;
            }
            case "common": {
                url = (this.lang === 'en') ? "../assets/i18n/en/common.json" : "../assets/i18n/hi/common.json";
                response = this.getJSON(url, content, forced);
                break;
            }
            case "detail-cards": {
                url = (this.lang === 'en') ? "../assets/i18n/en/detail-cards.json" : "../assets/i18n/hi/detail-cards.json";
                response = this.getJSON(url, content, forced);
                break;
            }
            case "messages": {
                url = (this.lang === 'en') ? "../assets/i18n/en/messages.json" : "../assets/i18n/hi/messages.json";
                response = this.getJSON(url, content, forced);
                break;
            }
            case "query-form": {
                url = (this.lang === 'en') ? "../assets/i18n/en/query-form.json" : "../assets/i18n/hi/query-form.json";
                response = this.getJSON(url, content, forced);
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

    getJSON(url, content, forced): Promise<any> {
        if (forced) {
            return this.http.get(url).toPromise();
        } else {
            if (this.assets && this.assets[content]) {
                return new Promise<any>((res) => {
                    res(this.assets[content]);
                });
            } else {
                return this.http.get(url).toPromise();
            }
        }
    }

    loadAssets(): Promise<any> {
        this.assets = {};
        return new Promise((resolve) => {
            this.readAssets("modules", true, (content, data) => {
                this.assets[content] = data;
            });

            this.readAssets("about", true, (content, data) => {
                this.assets[content] = data;
            });

            this.readAssets("tiles", true, (content, data) => {
                this.assets[content] = data;
            });

            this.readAssets("common", true, (content, data) => {
                this.assets[content] = data;
            });

            this.readAssets("detail-cards", true, (content, data) => {
                this.assets[content] = data;
            });

            this.readAssets("messages", true, (content, data) => {
                this.assets[content] = data;
            });

            this.readAssets("query-form", true, (content, data) => {
                this.assets[content] = data;
            });
            resolve(true);
        });
    }
}
