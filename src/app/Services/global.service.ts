import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  userId : string
  testId : string
  testType : string
  getUserId():string{
    return this.userId;
  }
  setUserId(id : string){
    this.userId=id
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
