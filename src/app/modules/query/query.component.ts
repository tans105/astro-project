import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {EmailService} from "../../services/email.service";
import {AppService} from "../../services/app.service";
import {ToastrService} from "ngx-toastr";
import {QueryEmail} from "../../model/user.model";
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {OrderService} from "../../services/order_service";

declare var Razorpay: any;

@Component({
    selector: 'app-query',
    templateUrl: './query.component.html',
    styleUrls: ['./query.component.scss']
})
export class QueryComponent {
    @ViewChild('content', {static: true}) content: ElementRef;
    user: QueryEmail;
    queryForm: FormGroup;
    contentLoaded = false;
    disableForm = false;
    data: any = {}
    showQuestions = false;
    perQuestionCost: number = 0;
    showSecondPerson = false;
    razorpayOptions = {
        key: "",
        amount: "",
        currency: "INR",
        name: "",
        description: "MangalamBhav Query",
        order_id: "",
        modal: {
            escape: false,
            ondismiss: () => {
                //nothing
            }
        },
        handler: (response) => {
            //nothing
        }
    };

    constructor(private fb: FormBuilder,
                private emailService: EmailService,
                private orderService: OrderService,
                public appService: AppService,
                private toastr: ToastrService,
                config: NgbModalConfig,
                private modalService: NgbModal,
                private router: Router,
                private zone: NgZone) {
        config.backdrop = 'static';
        config.keyboard = false;
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
            'fname_girl': new FormControl(''),
            'pob_girl': new FormControl(''),
            'sob_girl': new FormControl(''),
            'dob_girl': new FormControl(''),
            'tob_girl': new FormControl(''),
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
        this.modalService.open(this.content);
    }

    validateForm() {
        let questions = this.queryForm.get('questions').value,
            service = this.queryForm.get('service').value,
            isValid = true,
            errorMsg = 'mandatoryParamMissing';

        if (!this.queryForm.valid) {
            this.toastr.error(this.appService.getMessage(errorMsg), 'Error');
            return false;
        }

        //Validate questions (if applicable)
        if (questions && questions.length > 0) {
            if (service === 'custom') {
                questions.forEach(q => {
                    if (!q.question) {
                        isValid = false;
                        errorMsg = 'emptyQuestion'
                    }
                })
            } else {
                this.queryForm.value.questions = [];
            }
        }

        if (!isValid) this.toastr.error(this.appService.getMessage(errorMsg), 'Error');
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

        if (selectedService.id === 'kundli') {
            this.addValidators();
        } else {
            this.removeValidators();
        }
    }

    addValidators() {
        this.queryForm.controls["fname_girl"].setValidators(Validators.required);
        this.queryForm.controls["dob_girl"].setValidators(Validators.required);
        this.queryForm.controls["sob_girl"].setValidators(Validators.required);
        this.queryForm.controls["tob_girl"].setValidators(Validators.required);
        this.queryForm.controls["pob_girl"].setValidators(Validators.required);
    }

    removeValidators() {
        this.queryForm.controls["fname_girl"].clearValidators();
        this.queryForm.controls["fname_girl"].updateValueAndValidity();

        this.queryForm.controls["dob_girl"].clearValidators();
        this.queryForm.controls["dob_girl"].updateValueAndValidity();

        this.queryForm.controls["sob_girl"].clearValidators();
        this.queryForm.controls["sob_girl"].updateValueAndValidity();

        this.queryForm.controls["tob_girl"].clearValidators();
        this.queryForm.controls["tob_girl"].updateValueAndValidity();

        this.queryForm.controls["pob_girl"].clearValidators();
        this.queryForm.controls["pob_girl"].updateValueAndValidity();
    }

    modalAction(action) {
        this.user = this.queryForm.value as QueryEmail;
        this.user.emailType = 'query';

        if (action === 'checkout') {
            this.disableForm = true;
            this.initiatePayment(this.user);
        } else {
            this.disableForm = false;
        }
        this.modalService.dismissAll();
    }

    initiatePayment(user) {
        this.orderService.makeOrder(user).subscribe(res => {
            this.user.uuid = res.uuid;
            this.user.order_id = res['value']['id'];
            this.razorpayOptions.key = res['key'];
            this.razorpayOptions.amount = res['value']['amount'];
            this.razorpayOptions.name = user.email;
            this.razorpayOptions.order_id = res['value']['id'];
            this.razorpayOptions.handler = this.paymentSuccessHandler.bind(this);
            this.razorpayOptions.modal.ondismiss = () => this.disableForm = false;
            const rzp1 = new Razorpay(this.razorpayOptions);

            rzp1.on('payment.failed', () => {
                //TODO:  Send failed email mail
                this.zone.run(() => {
                    this.toastr.warning(this.appService.getMessage('emailFailed'), 'Error');
                    this.disableForm = false;
                })
            });
            rzp1.open();
        })
    }

    paymentSuccessHandler(response) {
        this.orderService.verifyOrder({gateway: response, user: this.user})
            .subscribe(
                (data) => {
                    this.emailService.send(this.user)
                        .then(() => {
                            this.zone.run(() => {
                                const {uuid, gateway} = data;
                                const {razorpay_order_id} = gateway;
                                this.orderService.updateOrder(razorpay_order_id, uuid);
                                this.queryForm.reset();
                                this.router.navigate([`/summary/${razorpay_order_id}`]);
                            })
                        }, (err) => {
                            this.zone.run(() => {
                                console.log("Email Failed, " + err);
                                this.disableForm = false;
                                this.toastr.warning(this.appService.getMessage('emailFailed'), 'Warning');
                            })
                        });
                },
                () => {
                    this.toastr.warning(this.appService.getMessage('emailFailed'), 'Error');
                })
    }
}
