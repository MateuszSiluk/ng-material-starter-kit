import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AdvancedEmployeesListComponent } from './advanced-employees-list.component';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule, FlexModule],
  declarations: [AdvancedEmployeesListComponent],
  providers: [],
  exports: [AdvancedEmployeesListComponent]
})
export class AdvancedEmployeesListComponentModule {
}
