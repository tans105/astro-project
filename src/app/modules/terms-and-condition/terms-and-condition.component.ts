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

  populateContent() {
    this.appService.getAssets().then((data) => {
      this.data = data;
      this.contentLoaded = true;
    });
  }
}
