import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {

  @Input()
  public name: string;

  public monogram: string;

  public backgroundColor = '#cecece';

  public readonly colors = [
    '#FF8080',
    '#305F72',
    '#5BA19B',
    '#8B4F80',
    '#427996',
  ];

  constructor() { }

  public ngOnInit(): void {
    this.monogram = this.name.split(' ', 2).map(d => d.substring(0, 1)).join('');
    this.backgroundColor = this.colors[this.textToNumber(this.monogram) % this.colors.length];
  }

  private textToNumber(text: string) {
    const charCodes = text
      .split('')
      .map(char => char.charCodeAt(0))
      .join('');
    return parseInt(charCodes, 10);
  }

}
