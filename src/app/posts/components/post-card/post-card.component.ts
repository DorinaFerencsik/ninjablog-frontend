import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IComment } from '../../interfaces/comment.interface';
import { IPost } from '../../interfaces/post.interface';
import { ApiPostService } from '../../services/api-post.service';
import { CommentOverlayComponent } from '../comment-overlay/comment-overlay.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {

  @Input()
  public post: IPost;

  public comments: IComment[];
  public user: any;

  constructor(protected apiService: ApiPostService,
              protected bottomSheet: MatBottomSheet) { }

  public ngOnInit() {
    combineLatest([
      this.apiService.getUser(this.post.userId),
      this.apiService.getCommentList(this.post.id),
    ]).pipe(
      tap(([user, comments]) => {
        this.user = user;
        this.comments = comments;
      })
    ).subscribe();
  }

  public openComments() {
    this.bottomSheet.open(
      CommentOverlayComponent,
      {
        data: this.comments,
      }
    );
  }
}
