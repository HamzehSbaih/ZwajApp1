import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private authservice:AuthService,private router:Router,private alertify:AlertifyService ) { }
  canActivate(): boolean {
    if(this.authservice.loggedIn()){
      return true;
    }
    this.alertify.error('يجب تسجيل الدخول أولا');
    this.router.navigate(['']);
    return false;
    
  }
}
