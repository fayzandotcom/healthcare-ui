import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';

@Injectable()
export class SignUpService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    signUp(username: string, password: string): Observable<HttpEvent<any>> {

        const body = new FormData();
        body.append('email', username)
        body.append('password', password);
        console.log(username);
        const url = this.config.API_BASE_URL + '/user/sign-up';
        return this.http.post<any>(url, body)
            .map(data => {
                return data;
            });
    }

}
