import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { BeerListComponent } from './beer-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonToggleModule, MatStepperModule, MatButtonModule, MatPaginatorModule, FlexModule],
  declarations: [BeerListComponent],
  providers: [],
  exports: [BeerListComponent]
})
export class BeerListComponentModule {
}
