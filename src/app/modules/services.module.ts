import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../common/shared.module";
import { DetailsComponent } from "./details/details.component";

@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent
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
