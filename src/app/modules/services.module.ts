import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../common/shared.module";
import { DetailsComponent } from "./details/details.component";
import { QueryComponent } from './query/query.component';
import { FormsModule } from "@angular/forms";
import { NgbDatepickerModule, NgbTimepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent,
        QueryComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        NgbDatepickerModule,
        NgbTimepickerModule,
        RouterModule
    ],
    providers: [],
    bootstrap: []
})
export class ServicesModule {
}
