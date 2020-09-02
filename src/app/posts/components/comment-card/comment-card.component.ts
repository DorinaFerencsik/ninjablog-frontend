import { Component, Input } from '@angular/core';
import { IComment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent {

  @Input()
  public comments: IComment[];

}
