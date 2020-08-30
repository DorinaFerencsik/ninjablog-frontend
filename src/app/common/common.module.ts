import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const components = [
  FooterComponent,
  HeaderComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ...components,
  ],
})
export class CommonModule { }
