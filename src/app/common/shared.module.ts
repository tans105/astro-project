import { NgModule } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AppCardComponent } from "./app-card/app-card.component";
import { AppTileComponent } from "./app-tile/app-tile.component";
import { CommonModule } from "@angular/common";
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AppCardComponent,
        AppTileComponent,
        CarouselComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AppCardComponent,
        AppTileComponent,
        CarouselComponent
    ]
})
export class SharedModule {
}
