import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [];

const vendorModules = [];

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
