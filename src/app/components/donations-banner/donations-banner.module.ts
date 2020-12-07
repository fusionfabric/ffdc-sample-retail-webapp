import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DonationsBannerComponent } from './donations-banner.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModules } from '../../material-modules';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [CommonModule, MatToolbarModule, FlexLayoutModule, MatIconModule, MaterialModules],
  exports: [DonationsBannerComponent],
  declarations: [DonationsBannerComponent]
})
export class BannerModule {}
