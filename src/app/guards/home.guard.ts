import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router){}
  canActivate(): boolean {

    if (this.auth.autenticado()){
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
