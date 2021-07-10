import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import _ from "lodash";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    lang: string = 'en';
    assets: any = {};
    private contentAPI = '/api/content';

    getEnvironment() {
        return environment.type
    }

    getBaseServerURL() {
        switch (environment.type) {
            case 'production': {
                return 'https://astroproject-server.herokuapp.com'
            }
            case 'uat': {
                return 'https://astro-project-server-uat.herokuapp.com'
            }
            default: {
                return 'http://localhost:8000'
            }
        }
    }

    constructor(private cookieService: CookieService, private http: HttpClient) {
    }

    getMessage(messageId) {
        if (this.assets["messages"]) {
            return this.assets["messages"][messageId];
        } else {
            this.getAssets().then(data => this.assets = data)
            return this.assets["messages"][messageId];
        }
    }

    async readAssets(content: string, forced = false) {
        this.getLanguage();
        return this.getJSON(content, forced, this.lang)
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

    getJSON(content, forced, lang): Promise<any> {
        let url = `../assets/i18n/${lang}/static_content.json`

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

    async getAssets() {
        if (!_.isEmpty(this.assets)) return this.assets

        let data = {};
        data = {...await this.readAssets("static_content", false), ...data};
        this.assets = data;
        return data;
    }
}
