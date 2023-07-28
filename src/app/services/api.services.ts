import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: "root",
})
export class ApiService {
    apiBase = environment.apiBase

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    getUsers() {
        const url = `${this.apiBase}set-users`;
        const headers = new HttpHeaders ({'Content-Type' : 'application/json'});
        return this.http.post(url, {headers:  headers})
        .pipe(catchError(err => of({ error: true, typeError : err })));
    }
}