import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductMasterComponent } from './components/product-master/product-master.component';
import { ProductMasterComponentModule } from './components/product-master/product-master.component-module';
import { ProductsServiceModule } from './services/products.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products-master-details', component: ProductMasterComponent },
    ]),
    ProductMasterComponentModule,
    ProductsServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
