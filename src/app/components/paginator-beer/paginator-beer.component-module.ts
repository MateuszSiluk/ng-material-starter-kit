import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { PaginatorBeerComponent } from './paginator-beer.component';

@NgModule({
  imports: [MatCardModule, MatPaginatorModule, MatChipsModule, CommonModule],
  declarations: [PaginatorBeerComponent],
  providers: [],
  exports: [PaginatorBeerComponent]
})
export class PaginatorBeerComponentModule {
}
