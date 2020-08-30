import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'ninjablog-frontend';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
  }

}
