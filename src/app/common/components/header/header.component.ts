import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IUser } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public user$: Subject<IUser>;

  constructor(private themeService: ThemeService,
              private authService: AuthService) {
    this.user$ = this.authService.getUser();
    this.user$.pipe(tap(user => console.log(user))).subscribe();
  }

  public toggleDarkMode(event: MatSlideToggleChange) {
    this.themeService.setDarkTheme(event.checked);
  }

  public onLogin() {
    this.authService.login();
  }

  public onLogout() {
    this.authService.logout();
  }
}
