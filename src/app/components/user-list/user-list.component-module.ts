import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { UserListComponent } from './user-list.component';

@NgModule({
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatListModule, MatSelectModule, MatOptionModule, MatRadioModule, MatTableModule, MatIconModule],
  declarations: [UserListComponent],
  providers: [],
  exports: [UserListComponent]
})
export class UserListComponentModule {
}
