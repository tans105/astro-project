import {Component, Input, OnInit} from '@angular/core';
import { AppService } from "../../services/app.service";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
    @Input() cards;
    @Input() title;
    contentLoaded = false;
}
