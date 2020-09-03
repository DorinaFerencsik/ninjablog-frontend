import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { ApiAuthService } from 'src/app/auth/services/api-auth.service';

import { ApiPostService } from '../../services/api-post.service';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-highlighted-post',
  templateUrl: './highlighted-post.component.html',
  styleUrls: ['./highlighted-post.component.scss'],
})
export class HighlightedPostComponent extends PostCardComponent {

  constructor(protected apiService: ApiPostService,
              protected bottomSheet: MatBottomSheet,
              private authApiService: ApiAuthService) {
    super(apiService, bottomSheet, authApiService);
  }

}
