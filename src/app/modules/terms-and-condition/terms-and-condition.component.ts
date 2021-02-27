import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.scss']
})
export class TermsAndConditionComponent {
  private contentLoaded: boolean;
  private brand: any;

  constructor(private appService: AppService) {
    this.populateContent();
  }

  populateContent() {
    this.appService.readAssets("common", false, (content, data) => {
      this.brand = data.brand;
      this.contentLoaded = true;
    });
  }
}