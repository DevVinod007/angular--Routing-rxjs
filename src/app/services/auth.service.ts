import { rejects } from "assert";
import { resolve } from "dns";

export class AuthService {
  isLoggedIn = false ;

  login(){
    this.isLoggedIn = true;
  }

  logOut(){
    this.isLoggedIn = false;
  }

  isAuthenticated(){
    // return this.isLoggedIn
    return new Promise((resolve,reject) => {
    setTimeout(() =>{
      resolve(this.isLoggedIn)
    },0)
    })
  }
}