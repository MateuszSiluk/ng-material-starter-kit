import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListComponent } from './components/filtered-products-list/filtered-product-list.component';
import { FilteredProductListBasedOnSubjectComponent } from './components/filtered-product-list-based-on-subject/filtered-product-list-based-on-subject.component';
import { FilteredProductListComponentModule } from './components/filtered-products-list/filtered-product-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductsServiceModule } from './services/products.service-module';
import { FilteredProductListBasedOnSubjectComponentModule } from './components/filtered-product-list-based-on-subject/filtered-product-list-based-on-subject.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products-based-on-routing/:category', component: FilteredProductListComponent },
      { path: 'products', component: FilteredProductListBasedOnSubjectComponent }
    ]),
    FilteredProductListComponentModule,
    CategoriesServiceModule,
    ProductsServiceModule,
    FilteredProductListBasedOnSubjectComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
