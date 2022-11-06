import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AgePredictionDetailsComponent } from './age-prediction-details.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [AgePredictionDetailsComponent],
  providers: [],
  exports: [AgePredictionDetailsComponent]
})
export class AgePredictionDetailsComponentModule {
}
