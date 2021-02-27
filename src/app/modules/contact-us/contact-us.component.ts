import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ContactUsEmail} from "../../model/contact-us.model";
import {EmailService} from "../../services/email.service";
import { ToastrService } from "ngx-toastr";
import {AppService} from "../../services/app.service";

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
    userFeedback: ContactUsEmail
    messageBoxTitle: string = 'Important Note'
    messageBoxContent: string = 'Anything you wish to ask us OR say to us any suggestions, ' +
        'comments doubts or problem about the website can be posted here. ' +
        'We will be glad to respond to your feedback at your email address as soon as possible.';
    disableForm: boolean = false;

    constructor(private emailService: EmailService, private toastr: ToastrService, private appService: AppService) {
    }

    onSubmit(f: NgForm) {
        this.disableForm = true;
        this.userFeedback = f.value as ContactUsEmail;
        this.userFeedback.emailType = 'feedback';
        this.emailService.send(this.userFeedback).then((data) => {
            this.toastr.success(this.appService.getMessage('emailSuccess'), 'Success');
            this.disableForm = false;
            f.reset();
        }, (err) => {
            console.log("Email Failed, " + err);
            this.toastr.warning(this.appService.getMessage('emailFailed'), 'Warning');
            this.disableForm = false;
        });
    }
}
