import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from "./modules/services.module";
import { SharedModule } from "./common/shared.module";
import {CookieService} from "ngx-cookie-service";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {AuthGuard} from "./guard/auth.guard";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ServicesModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    providers: [CookieService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
