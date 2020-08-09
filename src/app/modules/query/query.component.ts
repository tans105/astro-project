import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { User } from "../../model/user.model";
import { EmailService } from "../../services/email.service";
import { AppService } from "../../services/app.service";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-query',
    templateUrl: './query.component.html',
    styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
    user: User;

    constructor(private emailService: EmailService, private appService: AppService, private toastr: ToastrService) {
    }

    ngOnInit(): void {
    }

    onSubmit(f: NgForm) {
        this.user = f.form.value as User;
        //TODO: Payment service initiation post validation
        this.appService.loader(true);
        this.emailService.send(this.user).then((data) => {
            this.toastr.success('Query sent, we will get back to you', 'Success');
            this.appService.loader(false);
        }, (err) => {
            console.log("Email Failed, " + err);
            this.toastr.warning('Something went wrong. Please try again!', 'Warning');
            this.appService.loader(false);
        });
    }

}
