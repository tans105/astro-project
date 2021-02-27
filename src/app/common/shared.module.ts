import { NgModule } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AppCardComponent } from "./app-card/app-card.component";
import { AppTileComponent } from "./app-tile/app-tile.component";
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LanguageWidgetComponent } from './language-widget/language-widget.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { MessageBoxComponent } from './message-box/message-box.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AppCardComponent,
        AppTileComponent,
        CarouselComponent,
        LanguageWidgetComponent,
        PageTitleComponent,
        MessageBoxComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AppCardComponent,
        AppTileComponent,
        CarouselComponent,
        PageTitleComponent,
        MessageBoxComponent
    ]
})
export class SharedModule {
}
