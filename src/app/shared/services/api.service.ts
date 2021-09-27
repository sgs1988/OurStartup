import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpErrorHandler, HandleError } from './http-error.handler.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private handleError: HandleError;
  private apibaseurl: string;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('ApiService');
    this.apibaseurl = environment.apiBaseUrl;
  }

  get(apiUrl: string, httpOptions?: any): Observable<any> {
    httpOptions = this.addHttpHeaders(httpOptions);
    return this.http.get(this.apibaseurl + apiUrl, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  post(apiUrl: string, data?: any, httpOptions?: any): Observable<any> {
    httpOptions = this.addHttpHeaders(httpOptions);
    return this.http.post<any>(this.apibaseurl + apiUrl, data, httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  put(apiUrl: string, data?: any, httpOptions?: any): Observable<any> {
    httpOptions = this.addHttpHeaders(httpOptions);
    return this.http.put<any>(this.apibaseurl + apiUrl, data, httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }



  delete(apiUrl: string, httpOptions?: any): Observable<any> {
    httpOptions = this.addHttpHeaders(httpOptions);
    return this.http.delete<any>(this.apibaseurl + apiUrl, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  private addHttpHeaders(httpOptions?: any): any {
    let headers = new HttpHeaders();

    if (!httpOptions) {
      httpOptions = {};
    }
    if (httpOptions.headers) {
      httpOptions.headers.keys().forEach(key => {
        headers = headers.append(key, httpOptions.headers.get(key));
      });
    }
    if (
      headers
        .keys()
        .findIndex(
          key => key.toLowerCase() === 'Content-Type'.toLowerCase()
        ) === -1
    ) {
      headers = headers.append(
        'Content-Type',
        'application/x-www-form-urlencoded'
      );
    }

    return httpOptions;
  }
}
