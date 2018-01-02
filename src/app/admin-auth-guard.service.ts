
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/map';


@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userServece: UserService) { }

  canActivate(): Observable<boolean> {
   return this.auth.appUser$
      .map(appUser => appUser.isAdmin);
  }
}

