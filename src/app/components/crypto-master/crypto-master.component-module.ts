import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { CryptoMasterComponent } from './crypto-master.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [CryptoMasterComponent],
  providers: [],
  exports: [CryptoMasterComponent]
})
export class CryptoMasterComponentModule {
}
