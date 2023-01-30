import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { BannersComponent } from './banners/banners.component';
import { ButtonModule } from 'primeng/button';
import { GalleryComponent } from './gallery/gallery.component';
import {ImageModule} from 'primeng/image';
@NgModule({
  imports: [CommonModule, ButtonModule,ImageModule],
  declarations: [
    SliderComponent,
    BannersComponent,
    GalleryComponent

  ],
  exports: [
    SliderComponent,
    BannersComponent,
    GalleryComponent
  ],
})
export class uiModule {}
