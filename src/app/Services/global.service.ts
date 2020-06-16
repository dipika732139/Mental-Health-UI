import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  isMusicOn:boolean = true
  private userId : string 
  private testId : string
  private testType : string
  private isUserLoggedIn : boolean = false
  getUserId():string{
    return this.userId;
  }
  setUserId(id : string){
    this.userId=id
  }
  isLoggedIn():boolean{
    return this.isUserLoggedIn
  }
  logIn(id : string){
    this.isUserLoggedIn=true
    this.setUserId(id)
  }
  logOut(){
    this.isUserLoggedIn=false
    this.setUserId(null)
  }
toggleMusic(){
  this.isMusicOn=!this.isMusicOn
}
  getTestId():string{
    return this.testId;
  }
  setTestId(id : string){
    this.testId=id
  }

  getTestType():string{
    return this.testType;
  }
  setTestType(id : string){
    this.testType=id
  }
}
