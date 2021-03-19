import {Component, Input, OnInit} from '@angular/core';
import { AppService } from "../../services/app.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input() data : any;
}
