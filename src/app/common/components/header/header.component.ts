import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private themeService: ThemeService) { }

  public toggleDarkMode(event: MatSlideToggleChange) {
    this.themeService.setDarkTheme(event.checked);
  }
}
