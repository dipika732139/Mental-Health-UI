import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {GlobalService} from './Services/global.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _globalService : GlobalService , private _router : Router){}
  canActivate(): boolean{
    if(this._globalService.isLoggedIn())
      return true;
    else{
      this._router.navigate (['/login'])
      window.alert("Please sign in before using the services")
      return false
    }
  }  
}
