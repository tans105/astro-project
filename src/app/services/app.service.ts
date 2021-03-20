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
    private baseUrlContentService = (environment.production) ? 'https://astro-content-service.herokuapp.com' : 'http://localhost:8001';
    private contentAPI = '/api/content';

    constructor(private cookieService: CookieService, private http: HttpClient) {
    }

    getMessage(messageId) {
        return this.assets["messages"][messageId];
    }

    async readAssets(content: string, forced = false) {
        this.getLanguage();
        let response;

        switch (content) {
            case "dynamic_content": {
                response = this.getJSONFromContentService(content, forced, this.lang);
                break;
            }
            default:
                response = this.getJSON(content, forced, this.lang);
        }

        return response
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

    getJSONFromContentService(content, forced, lang): Promise<any> {
        let url = this.baseUrlContentService + this.contentAPI,
            query = `?id=${content}&lang=${lang}`

        if (forced) {
            return this.http.get(url + query).toPromise();
        } else {
            if (this.assets && this.assets[content]) {
                return new Promise<any>((res) => {
                    res(this.assets[content]);
                });
            } else {
                return this.http.get(url + query).toPromise();
            }
        }
    }

    async getAssets() {
        if(!_.isEmpty(this.assets)) return this.assets

        let data = {};
        data = {...await this.readAssets("dynamic_content", false), ...data};
        data = {...await this.readAssets("static_content", false), ...data};
        this.assets = data;
        return data;
    }
}
