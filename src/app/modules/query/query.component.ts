import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
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
    queryForm: FormGroup;

    constructor(private fb: FormBuilder, private emailService: EmailService, private appService: AppService, private toastr: ToastrService) {
        this.initForm();
    }

    ngOnInit(): void {
    }

    initForm() {
        this.queryForm = this.fb.group({
            'email': new FormControl('', [
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
            ]),
            'fname': new FormControl('', Validators.required),
            'pob': new FormControl('', Validators.required),
            'latitude': new FormControl(''),
            'longitude': new FormControl(''),
            'primary': new FormControl('', [
                Validators.required,
                Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]),
            'secondary': new FormControl('', [
                Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
            ]),
            'dob': new FormControl('', Validators.required),
            'tob': new FormControl('', Validators.required),
            'questions': this.fb.array([this.fb.group({question: ''})])
        });
    }

    get formControls(): any {
        return this.queryForm['controls'];
    }

    get questions() {
        return this.queryForm.get('questions') as FormArray;
    }

    addQuestion() {
        this.questions.push(this.fb.group({question: ''}));
    }

    removeQuestion(index) {
        this.questions.removeAt(index);
    }

    onSubmit() {
        this.user = this.queryForm.value as User;
        this.appService.loader(true);
        this.emailService.send(this.user).then((data) => {
            this.toastr.success(this.appService.getMessage('emailSuccess'), 'Success');
            this.appService.loader(false);
            this.queryForm.reset();
        }, (err) => {
            console.log("Email Failed, " + err);
            this.toastr.warning(this.appService.getMessage('emailFailed'), 'Warning');
            this.appService.loader(false);
        });
    }

}
