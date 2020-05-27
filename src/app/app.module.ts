import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppCardComponent } from './common/app-card/app-card.component';
import { HomeComponent } from './modules/home/home.component';
import { BusinessComponent } from './modules/business/business.component';
import { EducationComponent } from './modules/education/education.component';
import { KnowyourselfComponent } from './modules/knowyourself/knowyourself.component';
import { CareerComponent } from './modules/career/career.component';
import { LoveComponent } from './modules/love/love.component';
import { HealthComponent } from './modules/health/health.component';
import { MarriageComponent } from './modules/marriage/marriage.component';
import { HoroscopeComponent } from './modules/horoscope/horoscope.component';
import { RemediesComponent } from './modules/remedies/remedies.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AppCardComponent,
        HomeComponent,
        BusinessComponent,
        EducationComponent,
        KnowyourselfComponent,
        CareerComponent,
        LoveComponent,
        HealthComponent,
        MarriageComponent,
        HoroscopeComponent,
        RemediesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
