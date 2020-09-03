import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

import { Theme, ThemeService } from './common/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public theme$: Subject<Theme>;

  constructor(private translateService: TranslateService,
              private themeService: ThemeService) {
    this.translateService.setDefaultLang('en');
    this.theme$ = this.themeService.getTheme();
  }

}
