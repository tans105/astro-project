import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    @Input("models") models: [];
    @Input("size") size;

    constructor() {
    }

    ngOnInit(): void {
    }

    getImageUrl(model) {
        return {'background-image': 'url(' + 'assets/images/modules/' + model.image + ')'};
    }

    getTextScheme(model) {
        return (model.scheme === 'dark') ? {'color': 'black'} : {'color': 'white'};
    }

    getBackgroundScheme(model) {
        return (model.scheme === 'dark') ? {'background-color': 'black'} : {'background-color': 'white'};
    }

}
