import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DashboardService, AlertService, DoctorSearchService } from '../_services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model: any = {};
  tableData = [];
  metaData = {};

  constructor(
    private router: Router,
    private doctorSearchService: DoctorSearchService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  search(skip: string, limit: string) {
    this.doctorSearchService.search(this.model.keyword, '', '', skip, limit)
      .subscribe(
        resp => {
          console.log(resp.data);
          this.tableData = resp.data;
          this.metaData = resp.meta;
        },
        error => {
          this.tableData = null;
        });
  }

  getDoctorDetailDetailLink(doctorUid: string): string {
    return '/doctor-detail/' + doctorUid;
  }

}
