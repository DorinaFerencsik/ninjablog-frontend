import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/services/auth.service';

import { ApiPostService } from '../../services/api-post.service';

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.scss'],
})
export class CreatePostDialogComponent {

  public formGroup: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreatePostDialogComponent>,
              private apiService: ApiPostService,
              private authService: AuthService,
              private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      body: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

  public createPost() {
    this.apiService.postNewPost({
      userId: this.authService.getUserDetail().id,
      ...this.formGroup.value,
    }).pipe(
      tap(response => this.dialogRef.close(response))
    ).subscribe();
  }

}
