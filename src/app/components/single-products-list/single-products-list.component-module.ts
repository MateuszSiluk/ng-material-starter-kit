import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatChipsModule } from '@angular/material/chips';
import { SingleProductsListComponent } from './single-products-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, MatChipsModule],
  declarations: [SingleProductsListComponent],
  providers: [],
  exports: [SingleProductsListComponent]
})
export class SingleProductsListComponentModule {
}
