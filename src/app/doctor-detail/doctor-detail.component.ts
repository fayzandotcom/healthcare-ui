import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, DoctorSearchService } from '../_services/index';
import { error } from 'util';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {
  model: any = {};
  loading = false;
  practices = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private doctorSearchService: DoctorSearchService,
    private alertService: AlertService,
    private location: Location) {
      this.route.params.subscribe( params => this.getDetail(params['doctorUid']))
    }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  getDetail(doctorUid: string) {
    this.doctorSearchService.getDetail(doctorUid)
      .subscribe(
        resp => {
          this.model.title = resp.profile.title;
          this.model.name = resp.profile.first_name + ' ' +  resp.profile.last_name;
          this.model.gender = resp.profile.gender;
          this.model.bio = resp.profile.bio;
          this.practices = resp.practices;
        },
        error => {
          this.alertService.error('No data found!');
        });

  }

}
