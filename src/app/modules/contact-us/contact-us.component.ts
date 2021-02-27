import {Component, OnInit} from '@angular/core';
import {ContactUs} from "../../model/contact-us.model";
import {NgForm} from "@angular/forms";
import {User} from "../../model/user.model";

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
    userFeedback: ContactUs
    messageBoxTitle: string = 'Important Note'
    messageBoxContent: string = 'Anything you wish to ask us OR say to us any suggestions, ' +
        'comments doubts or problem about the website can be posted here. ' +
        'We will be glad to respond to your feedback at your email address as soon as possible.';

    constructor() {
    }

    ngOnInit(): void {
    }

    onSubmit(f: NgForm) {
        this.userFeedback = f.value as ContactUs;
        console.log(this.userFeedback);
    }
}
