import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { UniversityListComponent } from './university-list.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
  ],
  declarations: [UniversityListComponent],
  providers: [],
  exports: [UniversityListComponent],
})
export class UniversityListComponentModule {}
