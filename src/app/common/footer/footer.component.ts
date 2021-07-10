import {Component, Input} from '@angular/core';
import { AppService } from "../../services/app.service";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent{
    @Input() data: any;
    year = new Date().getFullYear();
    version = environment.version
}
