import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../common/shared.module";

@NgModule({
    declarations: [
        HomeComponent
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
