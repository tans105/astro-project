import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.scss']
})
export class TermsAndConditionComponent {
  contentLoaded: boolean;
  data: any = {}

  constructor(private appService: AppService) {
    this.populateContent();
  }

  async populateContent() {
    this.data = await this.appService.getAssets();
    this.contentLoaded = true;
  }
}
