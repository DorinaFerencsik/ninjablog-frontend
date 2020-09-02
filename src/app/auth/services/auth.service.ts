import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUser } from '../interfaces/user.interface';
import { ApiAuthService } from './api-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private user$ = new BehaviorSubject<IUser>(null);

  constructor(private apiService: ApiAuthService) { }

  public login() {
    const id = Math.floor(Math.random() * (10 - 1) + 2);
    this.apiService
      .getUser(id)
      .pipe(
        map(user => this.user$.next(user))
      ).subscribe();
  }

  public logout() {
    this.user$.next(null);
  }

  public getUser() {
    return this.user$;
  }

  public getUserDetail() {
    return this.user$.value;
  }
}
