import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilterSingleProductBackendComponent } from './filter-single-product-backend.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    FlexModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [FilterSingleProductBackendComponent],
  providers: [],
  exports: [FilterSingleProductBackendComponent],
})
export class FilterSingleProductBackendComponentModule {}
