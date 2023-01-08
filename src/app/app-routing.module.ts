import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { MultiCarsListComponent } from './components/multi-cars-list/multi-cars-list.component';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { MultiCarsListComponentModule } from './components/multi-cars-list/multi-cars-list.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'a', component: CryptoListComponent },
      { path: '', component: MultiCarsListComponent },
    ]),
    CryptoListComponentModule,
    MultiCarsListComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
