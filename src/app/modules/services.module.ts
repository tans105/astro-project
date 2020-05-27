import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { BusinessComponent } from "./business/business.component";
import { EducationComponent } from "./education/education.component";
import { KnowyourselfComponent } from "./knowyourself/knowyourself.component";
import { CareerComponent } from "./career/career.component";
import { LoveComponent } from "./love/love.component";
import { HealthComponent } from "./health/health.component";
import { MarriageComponent } from "./marriage/marriage.component";
import { HoroscopeComponent } from "./horoscope/horoscope.component";
import { RemediesComponent } from "./remedies/remedies.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../common/shared.module";

@NgModule({
    declarations: [
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
        CommonModule,
        SharedModule
    ],
    providers: [],
    bootstrap: []
})
export class ServicesModule {
}
