import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, retry } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable()

export class AuthgaurdService implements CanActivate ,CanActivateChild{
    constructor(private authservice:AuthService,private route:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean |Promise<boolean>| Observable<boolean> {
       return this.authservice.isAuthenticated().then (data => {
        if(data){
            return true 
        }else {
        return this.route.navigate(['/']);
        }
        })
    //    })
    //     if(isLoggedIn){
    //         return true 
    //     }else 
    //     return this.route.navigate(['/']);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean |Promise<boolean>| Observable<boolean> {
      return  this.canActivate(route,state)
    }
}