import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { JobSearchComponent } from './job-search.component';

@NgModule({
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, CommonModule, MatCardModule, MatButtonModule, MatTableModule],
  declarations: [JobSearchComponent],
  providers: [],
  exports: [JobSearchComponent]
})
export class JobSearchComponentModule {
}
