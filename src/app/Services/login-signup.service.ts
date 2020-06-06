import { Injectable } from '@angular/core';
import {SignUpRequest} from '../Models/Registration/sign-up-request'
import {SignUpResponse} from '../Models/Registration/sign-up-response'
import {LoginRequest} from '../Models/Registration/login-request'
import {LoginResponse} from '../Models/Registration/login-response'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Error} from '../Models/Common/error'
import { catchError, retry } from 'rxjs/operators';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {
  _error: Error;
  public headers = new HttpHeaders({
    "Content-Type": "application/json"
  });
  constructor(
    private http: HttpClient
    ) { }
    Login(loginRequest:LoginRequest):Observable<LoginResponse>{
      
      return this.http.put<LoginResponse>(this.getUrl(environment.userRegistrationApi.loginEndpoint), loginRequest, {
        headers: this.headers
      }).pipe(
        retry(1),
        catchError(this.errorHandler)
      );
    }
    SignUp(signUpRequest:SignUpRequest):Observable<SignUpResponse>{
      return this.http.put<SignUpResponse>(this.getUrl(environment.userRegistrationApi.signUpEndpoint), signUpRequest, {
        headers: this.headers
      }).pipe(
        retry(1),
        catchError(this.errorHandler)
      );
    }
    private getUrl(endpoint: string): string {
      // console.log( environment.baseUrl +
      //   environment.userRegistrationApi.route +
      //   endpoint)
      return environment.baseUrl +
        environment.userRegistrationApi.route +
        endpoint;
    }
    errorHandler(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
    }
}
