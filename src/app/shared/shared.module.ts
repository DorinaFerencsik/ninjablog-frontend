import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

const components = [];

const vendorModules = [
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
