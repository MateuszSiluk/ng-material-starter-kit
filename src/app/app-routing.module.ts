import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactDetailsComponent } from './components/cat-fact-details/cat-fact-details.component';
import { AgePredictionDetailsComponent } from './components/age-prediction-details/age-prediction-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatFactDetailsComponentModule } from './components/cat-fact-details/cat-fact-details.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgePredictionDetailsComponentModule } from './components/age-prediction-details/age-prediction-details.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductsServiceModule } from './services/products.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'cat-fact', component: CatFactDetailsComponent },
      { path: 'age/:name', component: AgePredictionDetailsComponent },
      { path: 'product/:id', component: ProductDetailsComponent }
    ]),
    CatFactDetailsComponentModule,
    CatFactServiceModule,
    AgePredictionDetailsComponentModule,
    AgePredictionServiceModule,
    ProductDetailsComponentModule,
    ProductsServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
