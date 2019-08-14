import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError as observableThrowError, Observable } from 'rxjs';
import { EnvService } from '@fuse/env/env.service';





@Injectable()
export class AuthGuard implements CanActivate {
  token: any;

  constructor(private _router: Router,  private http: HttpClient, private env: EnvService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const helper = new JwtHelperService();
      debugger;
    
    // this.token = localStorage.getItem('token');
    this.token = this.getCookie("token");


    if (!this.token) {
      return false;
    }

    const decodedToken = helper.decodeToken(this.token);
    if (this.token == null || this.token == undefined || this.token == "undefined") {
    
   
      window.location.href = decodedToken.HostName; 
    }


    if (this.token !== null && this.token != undefined && this.token != "undefined") {

      const isExpired = helper.isTokenExpired(this.token);
      if (isExpired) {
        window.location.href = decodedToken.HostName;  //  this.env.HIS;
        return false;
      }
      // logged in so return true
      return true;
    }

    window.location.href = decodedToken.HostName;//this.env.HIS;
    return false;
  }
  getCookie(name){
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
  public handleError(error: HttpErrorResponse): Observable<any> {
    return observableThrowError(error);
  }
}
