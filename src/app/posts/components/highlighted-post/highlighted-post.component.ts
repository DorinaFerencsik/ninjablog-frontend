import { Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ApiPostService } from '../../services/api-post.service';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-highlighted-post',
  templateUrl: './highlighted-post.component.html',
  styleUrls: ['./highlighted-post.component.scss'],
})
export class HighlightedPostComponent extends PostCardComponent {

  constructor(protected apiService: ApiPostService,
              protected bottomSheet: MatBottomSheet) {
    super(apiService, bottomSheet);
  }

}
