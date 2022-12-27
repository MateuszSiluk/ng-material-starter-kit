import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ProductMasterComponent } from './product-master.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [ProductMasterComponent],
  providers: [],
  exports: [ProductMasterComponent]
})
export class ProductMasterComponentModule {
}
