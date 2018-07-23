import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, SignUpService } from '../_services/index';

declare var $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private signUpService: SignUpService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  signUp() {
    this.loading = true;
    console.log('login comp');
    if (this.model.rePassword !== this.model.password) {
      this.alertService.error('Password missmatch!');
      this.loading = false;
      return;
    }
    this.signUpService.signUp(this.model.username, this.model.password)
        .subscribe(
          data => {
            console.log('sign-up sucess!');
            this.router.navigate(['/login']);
          },
          error => {
            console.log('sign-up fail');
            this.alertService.error('Error occured while sign up!');
            this.loading = false;
          });
  }

}
