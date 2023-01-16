import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { BannersComponent } from './banners/banners.component';

@NgModule({
  imports: [CommonModule],
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
