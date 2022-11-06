import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactDetailsComponent } from './components/cat-fact-details/cat-fact-details.component';
import { CatFactDetailsComponentModule } from './components/cat-fact-details/cat-fact-details.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'cat-fact', component: CatFactDetailsComponent },
    ]),
    CatFactDetailsComponentModule,
    CatFactServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
