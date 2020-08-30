import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {

  @Input()
  public user: any;

  public monogram: string;

  public backgroundColor;

  public readonly colors = [
    '#FF8080',
    '#305F72',
    '#5BA19B',
    '#8B4F80',
    '#427996',
  ];

  constructor() { }

  public ngOnInit(): void {
    this.monogram = this.user.name.split(' ', 2).map(d => d.substring(0, 1)).join('');
    this.backgroundColor = this.colors[Math.floor(this.user.id / 2)];
  }

}
