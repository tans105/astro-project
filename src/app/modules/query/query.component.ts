import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {EmailService} from "../../services/email.service";
import {AppService} from "../../services/app.service";
import {ToastrService} from "ngx-toastr";
import {QueryEmail} from "../../model/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-query',
    templateUrl: './query.component.html',
    styleUrls: ['./query.component.scss']
})
export class QueryComponent {
    user: QueryEmail;
    queryForm: FormGroup;
    contentLoaded = false;
    disableForm = false;
    data: any = {}
    showQuestions = false;
    perQuestionCost: number = 0;
    showSecondPerson = false;

    constructor(private fb: FormBuilder,
                private emailService: EmailService,
                public appService: AppService,
                private toastr: ToastrService) {
        this.populateContent();
    }

    populateContent() {
        window.scrollTo(0, 0)
        this.appService.getAssets().then((data) => {
            this.data = data;
            this.initForm()
            this.contentLoaded = true;
        });

    }

    initForm() {
        this.queryForm = this.fb.group({
            'email': new FormControl('', [
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
            ]),
            'primary': new FormControl('', [
                Validators.required,
                Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]),
            'secondary': new FormControl('', [
                Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
            ]),
            'fname': new FormControl('', Validators.required),
            'pob': new FormControl('', Validators.required),
            'sob': new FormControl('', [Validators.required, Validators.min(1)]),
            'dob': new FormControl('', Validators.required),
            'tob': new FormControl('', Validators.required),
            'fname_2': new FormControl(''),
            'pob_2': new FormControl(''),
            'sob_2': new FormControl(''),
            'dob_2': new FormControl(''),
            'tob_2': new FormControl(''),
            'questions': this.fb.array([this.fb.group({question: ''})]),
            'amount': new FormControl('', Validators.required),
            'service': new FormControl('', [Validators.required, Validators.min(1)]),
        });
    }

    get formControls(): any {
        return this.queryForm['controls'];
    }

    get questions() {
        return this.queryForm.get('questions') as FormArray;
    }

    addQuestion() {
        let prevAmount = this.queryForm.get('amount').value;
        let newAmount = parseInt(String(this.perQuestionCost)) + parseInt(prevAmount);

        this.queryForm.patchValue({amount: newAmount})
        this.questions.push(this.fb.group({question: ''}));
    }

    removeQuestion(index) {
        let prevAmount = this.queryForm.get('amount').value;
        let newAmount = parseInt(prevAmount) - parseInt(String(this.perQuestionCost));
        this.questions.removeAt(index);
        this.queryForm.patchValue({amount: newAmount})
    }

    onSubmit() {
        if (!this.validateForm()) {
            return;
        }

        this.disableForm = true;
        this.user = this.queryForm.value as QueryEmail;
        this.user.emailType = 'query';
        this.emailService.send(this.user).then((data) => {
            this.toastr.success(this.appService.getMessage('emailSuccess'), 'Success');
            this.disableForm = false;
            this.queryForm.reset();
        }, (err) => {
            console.log("Email Failed, " + err);
            this.disableForm = false;
            this.toastr.warning(this.appService.getMessage('emailFailed'), 'Warning');
        });
    }

    validateForm() {
        let questions = this.queryForm.get('questions').value,
            service = this.queryForm.get('service').value,
            isValid = true;

        if (questions && questions.length > 0) {
            if (service === 'custom') {
                questions.forEach(q => {
                    if (!q.question) {
                        isValid = false;
                    }
                })
            } else {
                this.queryForm.value.questions = [];
            }
        }

        if(!isValid) {
            this.toastr.warning(this.appService.getMessage('emptyQuestion'), 'Warning');
        }

        return isValid;
    }

    onServiceChange(event) {
        let selectedService = this.data.services
            .find((service) => service.id === event.target.value);

        if (selectedService) {
            this.perQuestionCost = selectedService.newPrice;
            this.showQuestions = selectedService.id === 'custom';
            this.showSecondPerson = selectedService.id === 'kundli';
            this.queryForm.patchValue({amount: this.perQuestionCost})
        }

        if(selectedService.id === 'kundli') {
            this.addValidators();
        } else {
            this.removeValidators();
        }
    }

    addValidators() {
        this.queryForm.controls["fname_2"].setValidators(Validators.required);
        this.queryForm.controls["dob_2"].setValidators(Validators.required);
        this.queryForm.controls["sob_2"].setValidators(Validators.required);
        this.queryForm.controls["tob_2"].setValidators(Validators.required);
        this.queryForm.controls["pob_2"].setValidators(Validators.required);
    }

    removeValidators() {
        this.queryForm.controls["fname_2"].clearValidators();
        this.queryForm.controls["fname_2"].updateValueAndValidity();

        this.queryForm.controls["dob_2"].clearValidators();
        this.queryForm.controls["dob_2"].updateValueAndValidity();

        this.queryForm.controls["sob_2"].clearValidators();
        this.queryForm.controls["sob_2"].updateValueAndValidity();

        this.queryForm.controls["tob_2"].clearValidators();
        this.queryForm.controls["tob_2"].updateValueAndValidity();

        this.queryForm.controls["pob_2"].clearValidators();
        this.queryForm.controls["pob_2"].updateValueAndValidity();
    }
}
