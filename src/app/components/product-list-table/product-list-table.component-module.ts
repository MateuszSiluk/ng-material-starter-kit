import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ProductListTableComponent } from './product-list-table.component';

@NgModule({
  imports: [MatCardModule, MatTableModule, CommonModule],
  declarations: [ProductListTableComponent],
  providers: [],
  exports: [ProductListTableComponent]
})
export class ProductListTableComponentModule {
}
