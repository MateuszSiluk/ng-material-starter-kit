import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListComponent } from './components/filtered-products-list/filtered-product-list.component';
import { FilteredProductListBasedOnSubjectComponent } from './components/filtered-product-list-based-on-subject/filtered-product-list-based-on-subject.component';
import { SortedProductByPriceComponent } from './components/sorted-product-by-price/sorted-product-by-price.component';
import { AdvancedEmployeesListComponent } from './components/advanced-employees-list/advanced-employees-list.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { FilteredProductListComponentModule } from './components/filtered-products-list/filtered-product-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductsServiceModule } from './services/products.service-module';
import { FilteredProductListBasedOnSubjectComponentModule } from './components/filtered-product-list-based-on-subject/filtered-product-list-based-on-subject.component-module';
import { SortedProductByPriceComponentModule } from './components/sorted-product-by-price/sorted-product-by-price.component-module';
import { AdvancedEmployeesListComponentModule } from './components/advanced-employees-list/advanced-employees-list.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { BeerListComponentModule } from './components/beer-list/beer-list.component-module';
import { BeersServiceModule } from './services/beers.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products-based-on-routing/:category', component: FilteredProductListComponent },
      { path: 'products', component: FilteredProductListBasedOnSubjectComponent },
      { path: 'sorted-products', component: SortedProductByPriceComponent },
      { path: 'employees', component: AdvancedEmployeesListComponent },
      { path: 'beers', component: BeerListComponent }
    ]),
    FilteredProductListComponentModule,
    CategoriesServiceModule,
    ProductsServiceModule,
    FilteredProductListBasedOnSubjectComponentModule,
    SortedProductByPriceComponentModule,
    AdvancedEmployeesListComponentModule,
    EmployeesServiceModule,
    BeerListComponentModule,
    BeersServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
