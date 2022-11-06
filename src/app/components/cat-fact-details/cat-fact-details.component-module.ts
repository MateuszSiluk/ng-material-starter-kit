import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CatFactDetailsComponent } from './cat-fact-details.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CatFactDetailsComponent],
  providers: [],
  exports: [CatFactDetailsComponent],
})
export class CatFactDetailsComponentModule {}
