import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy {
  userAdded:boolean = false;
  title = 'routing';
  unSub! :Subscription
  constructor(private authService:AuthService,private UserService:UserService){

  }

  ngOnInit(): void {
  this.unSub =  this.UserService.userAddedEvent.subscribe((data) => {
      console.log(data)
      this.userAdded = data;
    })
  }

  onLoginClick(){
   this.authService.login()
  }

  onLogoutClick(){
   this.authService.logOut()
  }

  ngOnDestroy(): void {
    this.unSub.unsubscribe()
  }
}
