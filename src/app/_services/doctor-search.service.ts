import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';
import { catchError } from '../../../node_modules/rxjs/operators';

@Injectable()
export class DoctorSearchService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    search(keyword: string, location: string, userLocation: string, skip: string, limit: string) {
        const url = this.config.API_BASE_URL + '/doctors?query=' + keyword +
        '&location=' + location + '&user_location=' + userLocation + '&skip=' + skip + '&limit=' + limit;
        return this.http.get<any>(url)
            .map(resp => {
                if (resp) {
                    return resp;
                }
                return Observable.throw('No data found.');
            })
            /*.subscribe(
                data => console.log('success', data),
                error => console.log('oops', error)
            );*/
    }

    getDetail(doctorUid: string) {

        const url = this.config.API_BASE_URL + '/doctors/' + doctorUid;
        return this.http.get<any>(url)
            .map(resp => {
                if (resp) {
                    return resp;
                }
                return Observable.throw('No data found.');
            });

    }

}
