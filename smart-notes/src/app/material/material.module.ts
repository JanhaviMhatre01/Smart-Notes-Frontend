import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

const MaterialComponents = [
  MatSliderModule,
];

@NgModule({
  exports: [MatSliderModule],
  imports: [
    MatSliderModule
  ]
})
export class MaterialModule { }
