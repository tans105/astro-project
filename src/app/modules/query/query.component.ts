import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { User } from "../../model/user.model";

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.user = f.form.value as User;
    console.log(this.user);
    //TODO: Payment service initiation post validation
  }

}
