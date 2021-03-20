import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  data: any = {}
  brand: any;
  contentLoaded: boolean;

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
