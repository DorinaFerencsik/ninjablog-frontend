
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CommentOverlayComponent } from './components/comment-overlay/comment-overlay.component';
import { CreatePostDialogComponent } from './components/create-post-dialog/create-post-dialog.component';
import { HighlightedPostComponent } from './components/highlighted-post/highlighted-post.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsRoutingModule } from './posts-routing.module';

const components = [
  CreatePostDialogComponent,
  CommentOverlayComponent,
  HighlightedPostComponent,
  PostCardComponent,
  PostListComponent,
];

@NgModule({
  declarations: components,
  imports: [
    PostsRoutingModule,
    SharedModule,
  ],
})
export class PostsModule { }
