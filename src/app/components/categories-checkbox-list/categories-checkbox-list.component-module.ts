import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriesCheckboxListComponent } from './categories-checkbox-list.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CategoriesCheckboxListComponent],
  providers: [],
  exports: [CategoriesCheckboxListComponent]
})
export class CategoriesCheckboxListComponentModule {
}
