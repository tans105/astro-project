import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './app-tile.component.html',
  styleUrls: ['./app-tile.component.scss']
})
export class AppTileComponent implements OnInit {

  @Input("icon") icon;
  @Input("heading") heading;

  constructor() { }

  ngOnInit(): void {
  }

}
