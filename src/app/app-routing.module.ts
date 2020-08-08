import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./modules/home/home.component";
import { DetailsComponent } from "./modules/details/details.component";


const routes: Routes = [
    {path: "details", component: DetailsComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
