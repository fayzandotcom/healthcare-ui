import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';

@Injectable()
export class DashboardService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    getTotalPurchaseCodesCount() {

        const url = this.config.API_BASE_URL + '/api/get/all/verify/attempt/count';
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        return this.http.get<any>(url, {headers})
            .map(data => {
                if (data && data.count != null) {
                    return data;
                }
                return Observable.throw('No data found.');
            });

    }

    getExpirePurchaseCodesCount() {

        const url = this.config.API_BASE_URL + '/api/get/expire/verify/attempt/count';
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        return this.http.get<any>(url, {headers})
            .map(data => {
                if (data && data.count != null) {
                    return data;
                }
                return Observable.throw('No data found.');
            });

    }

    getNewBuyerFeedbackCount() {

        const url = this.config.API_BASE_URL + '/api/get/unread/buyer/feedback/count';
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        return this.http.get<any>(url, {headers})
            .map(data => {
                if (data && data.count != null) {
                    return data;
                }
                return Observable.throw('No data found.');
            });

    }

    getUnresolveBuyerFeedbackCount() {

        const url = this.config.API_BASE_URL + '/api/get/read/buyer/feedback/count';
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        return this.http.get<any>(url, {headers})
            .map(data => {
                if (data && data.count != null) {
                    return data;
                }
                return Observable.throw('No data found.');
            });

    }

    getCurrentPurchaseCode() {
        const url = this.config.API_BASE_URL + '/api/get/current/purchase/code/10';
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        return this.http.get<any>(url, {headers})
            .map(resp => {
                if (resp && resp.count > 0) {
                    return resp;
                }
                return Observable.throw('No data found.');
            });
    }

}
