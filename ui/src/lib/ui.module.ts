import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { BannersComponent } from './banners/banners.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [
    SliderComponent,
    BannersComponent
  ],
  exports: [
    SliderComponent,
    BannersComponent
  ],
})
export class uiModule {}
