import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ThemeService } from './common/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'ninjablog-frontend';
  public useDarkTheme: Subject<boolean>;

  constructor(private translateService: TranslateService,
              private themeService: ThemeService) {
    this.translateService.setDefaultLang('en');
    this.useDarkTheme = this.themeService.getDarkTheme();
  }

}
