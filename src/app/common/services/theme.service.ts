import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private isDarkTheme = new Subject<boolean>();

  constructor() {
    this.isDarkTheme.next(false);
  }

  public setDarkTheme(isDarkTheme: boolean) {
    this.isDarkTheme.next(isDarkTheme);
  }

  public getDarkTheme() {
    return this.isDarkTheme;
  }
}
