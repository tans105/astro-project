import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {QueryComponent} from "./modules/query/query.component";
import {ContactUsComponent} from "./modules/contact-us/contact-us.component";
import {DisclaimerComponent} from "./modules/disclaimer/disclaimer.component";
import {PrivacyPolicyComponent} from "./modules/privacy-policy/privacy-policy.component";
import {TermsAndConditionComponent} from "./modules/terms-and-condition/terms-and-condition.component";
import {LoginComponent} from "./modules/login/login.component";
import {AdminComponent} from "./modules/admin/admin.component";
import {AuthGuard} from "./guard/auth.guard";


const routes: Routes = [
    {path: "submit-query", component: QueryComponent},
    {path: "contact-us", component: ContactUsComponent},
    {path: "disclaimer", component: DisclaimerComponent},
    {path: "privacy-policy", component: PrivacyPolicyComponent},
    {path: "terms-and-conditions", component: TermsAndConditionComponent},
    {path: "login", component: LoginComponent},
    {path: "admin", component: AdminComponent, canActivate: [AuthGuard  ]},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
