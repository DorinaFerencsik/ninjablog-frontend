import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { LoginDialogComponent } from '../components/login-dialog/login-dialog.component';
import { IUser } from '../interfaces/user.interface';
import { ApiAuthService } from './api-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private user$ = new BehaviorSubject<IUser>(null);

  constructor(private apiService: ApiAuthService,
              private dialog: MatDialog) { }

  public login(): Observable<any> {
    const id = Math.floor(Math.random() * (10 - 1) + 2);
    return this.apiService
      .getUser(id)
      .pipe(
        tap(user => this.user$.next(user))
      );
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

  public loggedInPreCheck(callback) {
    if (this.user$.value) {
      callback();
    } else {
      this.dialog.open(LoginDialogComponent)
        .afterClosed()
        .pipe(
          switchMap(result => result ? this.login() : of(null)),
          tap(user => {
            if (user) {
              callback();
            }
          })
        )
      .subscribe();
    }
  }
}
