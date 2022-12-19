import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { SortedProductByPriceComponent } from './sorted-product-by-price.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule],
  declarations: [SortedProductByPriceComponent],
  providers: [],
  exports: [SortedProductByPriceComponent]
})
export class SortedProductByPriceComponentModule {
}
