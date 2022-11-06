import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatButtonToggleModule],
  declarations: [ProductDetailsComponent],
  providers: [],
  exports: [ProductDetailsComponent]
})
export class ProductDetailsComponentModule {
}
