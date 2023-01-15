import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FlexModule } from '@angular/flex-layout/flex';
import { CitiesListComponent } from './cities-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule, FlexModule],
  declarations: [CitiesListComponent],
  providers: [],
  exports: [CitiesListComponent]
})
export class CitiesListComponentModule {
}
