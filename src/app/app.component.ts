import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';

  constructor(private authService:AuthService){

  }


  onLoginClick(){
   this.authService.login()
  }

  onLogoutClick(){
   this.authService.logOut()
  }
}
