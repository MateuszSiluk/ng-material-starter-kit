import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ArraySingleJobsComponent } from './array-single-jobs.component';

@NgModule({
  imports: [MatProgressSpinnerModule],
  declarations: [ArraySingleJobsComponent],
  providers: [],
  exports: [ArraySingleJobsComponent]
})
export class ArraySingleJobsComponentModule {
}
