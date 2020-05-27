import { NgModule } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AppCardComponent } from "./app-card/app-card.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AppCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AppCardComponent
    ]
})
export class SharedModule {
}
