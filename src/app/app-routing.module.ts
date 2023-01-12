import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleProductsListComponent } from './components/single-products-list/single-products-list.component';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { FilterSingleProductBackendComponent } from './components/filter-single-product-backend/filter-single-product-backend.component';
import { SingleProductsListComponentModule } from './components/single-products-list/single-products-list.component-module';
import { JobSearchComponentModule } from './components/job-search/job-search.component-module';
import { FilterSingleProductBackendComponentModule } from './components/filter-single-product-backend/filter-single-product-backend.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'sort-single-product', component: SingleProductsListComponent },
      { path: 'multi-jobs', component: JobSearchComponent },
      {
        path: 'products/:category',
        component: FilterSingleProductBackendComponent,
      },
    ]),
    SingleProductsListComponentModule,
    JobSearchComponentModule,
    FilterSingleProductBackendComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
