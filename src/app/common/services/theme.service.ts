import { OverlayContainer} from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private theme = new Subject<Theme>();

  constructor(private overlayContainer: OverlayContainer) {
    this.overlayContainer.getContainerElement().classList.add('light');
  }

  public setDarkTheme(isDarkTheme: boolean) {
    const theme = isDarkTheme ? 'dark' : 'light';

    this.overlayContainer.getContainerElement().classList.remove(isDarkTheme ? 'light' : 'dark');
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.theme.next(theme);
  }

  public getTheme() {
    return this.theme;
  }
}
