import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

const components = [];

const vendorModules = [
  FlexLayoutModule,
  MatButtonModule,
  MatCardModule,
  TranslateModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    ...vendorModules,
  ],
  exports: [
    CommonModule,
    ...vendorModules,
  ],
})
export class SharedModule { }
