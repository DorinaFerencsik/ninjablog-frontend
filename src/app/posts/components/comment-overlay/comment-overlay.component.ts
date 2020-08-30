import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { IComment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-comment-overlay',
  templateUrl: './comment-overlay.component.html',
  styleUrls: ['./comment-overlay.component.scss'],
})
export class CommentOverlayComponent {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: IComment[],
              public overlayRef: MatBottomSheetRef<CommentOverlayComponent>) { }

  public close() {
    this.overlayRef.dismiss();
  }
}
