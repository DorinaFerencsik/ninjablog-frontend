import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';

import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';

const components = [
  UserAvatarComponent,
];

const vendorModules = [
  FlexLayoutModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSlideToggleModule,
  ReactiveFormsModule,
  TranslateModule,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    ...vendorModules,
  ],
  exports: [
    CommonModule,
    ...components,
    ...vendorModules,
  ],
})
export class SharedModule { }
