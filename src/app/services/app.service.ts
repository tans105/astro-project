import { EventEmitter, Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    lang: string = 'en';
    assets: {};
    loadingStarts: EventEmitter<boolean>;

    constructor(private cookieService: CookieService, private http: HttpClient) {
        this.loadingStarts = new EventEmitter<boolean>();
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
                url = (this.lang === 'en') ? "../assets/i8n/en/services.json" : "../assets/i8n/hi/services.json";
                response = this.getJSON(url, content, forced);
                break;
            }
            case "about": {
                url = (this.lang === 'en') ? "../assets/i8n/en/about.json" : "../assets/i8n/hi/about.json";
                response = this.getJSON(url, content, forced);
                break;
            }
            case "tiles": {
                url = (this.lang === 'en') ? "../assets/i8n/en/tile-content.json" : "../assets/i8n/hi/tile-content.json";
                response = this.getJSON(url, content, forced);
                break;
            }
            case "common": {
                url = (this.lang === 'en') ? "../assets/i8n/en/common.json" : "../assets/i8n/hi/common.json";
                response = this.getJSON(url, content, forced);
                break;
            }
            case "detail-cards": {
                url = (this.lang === 'en') ? "../assets/i8n/en/detail-cards.json" : "../assets/i8n/hi/detail-cards.json";
                response = this.getJSON(url, content, forced);
                break;
            }
            case "messages": {
                url = (this.lang === 'en') ? "../assets/i8n/en/messages.json" : "../assets/i8n/hi/messages.json";
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

    loader(status): void {
        this.loadingStarts.emit(status);
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
            resolve(true);
        });
    }
}
