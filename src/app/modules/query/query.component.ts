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
        // TODO: Payment service initiation post validation
        // TODO: localization, Questionairre text area, dropdowns
        // TODO: DB connection and code cleanup on server ( migrate to JAVA ? )
        this.appService.loader(true);
        this.emailService.send(this.user).then((data) => {
            this.toastr.success(this.appService.getMessage('emailSuccess'), 'Success');
            this.appService.loader(false);
            f.reset();
        }, (err) => {
            console.log("Email Failed, " + err);
            this.toastr.warning(this.appService.getMessage('emailFailed'), 'Warning');
            this.appService.loader(false);
        });
    }

}
