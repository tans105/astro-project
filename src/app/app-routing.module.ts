import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./modules/home/home.component";
import { BusinessComponent } from "./modules/business/business.component";
import { RemediesComponent } from "./modules/remedies/remedies.component";
import { MarriageComponent } from "./modules/marriage/marriage.component";
import { KnowyourselfComponent } from "./modules/knowyourself/knowyourself.component";
import { HoroscopeComponent } from "./modules/horoscope/horoscope.component";
import { HealthComponent } from "./modules/health/health.component";
import { EducationComponent } from "./modules/education/education.component";
import { CareerComponent } from "./modules/career/career.component";
import { LoveComponent } from "./modules/love/love.component";


const routes: Routes = [
    {path: 'business', component: BusinessComponent},
    {path: 'career', component: CareerComponent},
    {path: 'education', component: EducationComponent},
    {path: 'health', component: HealthComponent},
    {path: 'home', component: HomeComponent},
    {path: 'horoscope', component: HoroscopeComponent},
    {path: 'knowyourself', component: KnowyourselfComponent},
    {path: 'marriage', component: MarriageComponent},
    {path: 'remedies', component: RemediesComponent},
    {path: 'love', component: LoveComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
