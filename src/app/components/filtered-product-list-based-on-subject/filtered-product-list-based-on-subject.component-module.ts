import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductListBasedOnSubjectComponent } from './filtered-product-list-based-on-subject.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [FilteredProductListBasedOnSubjectComponent],
  providers: [],
  exports: [FilteredProductListBasedOnSubjectComponent]
})
export class FilteredProductListBasedOnSubjectComponentModule {
}
