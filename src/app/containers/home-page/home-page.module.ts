import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MaterialModules } from '../../material-modules';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports: [HomePageComponent],
  entryComponents: [HomePageComponent]
})
export class HomePageModule { }
