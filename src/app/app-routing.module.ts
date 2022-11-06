import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactDetailsComponent } from './components/cat-fact-details/cat-fact-details.component';
import { AgePredictionDetailsComponent } from './components/age-prediction-details/age-prediction-details.component';
import { CatFactDetailsComponentModule } from './components/cat-fact-details/cat-fact-details.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgePredictionDetailsComponentModule } from './components/age-prediction-details/age-prediction-details.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'cat-fact', component: CatFactDetailsComponent },
      { path: 'age/:name', component: AgePredictionDetailsComponent }
    ]),
    CatFactDetailsComponentModule,
    CatFactServiceModule,
    AgePredictionDetailsComponentModule,
    AgePredictionServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
