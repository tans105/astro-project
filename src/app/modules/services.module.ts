import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../common/shared.module";
import { DetailsComponent } from "./details/details.component";
import { QueryComponent } from './query/query.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {NgbAccordionModule, NgbDatepickerModule, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContributeComponent } from './contribute/contribute.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent,
        QueryComponent,
        ContactUsComponent,
        DisclaimerComponent,
        PrivacyPolicyComponent,
        ContributeComponent,
        TermsAndConditionComponent,
        LoginComponent,
        AdminComponent,
        ServicesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        NgbDatepickerModule,
        NgbTimepickerModule,
        RouterModule,
        ReactiveFormsModule,
        NgbAccordionModule
    ],
    providers: [],
    bootstrap: []
})
export class ServicesModule {
}
