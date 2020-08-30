import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-highlighted-post',
  templateUrl: './highlighted-post.component.html',
  styleUrls: ['./highlighted-post.component.scss'],
})
export class HighlightedPostComponent  {

  @Input()
  public post: IPost;

  constructor() { }

}
