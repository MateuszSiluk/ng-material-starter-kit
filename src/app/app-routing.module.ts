import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { JobListComponentModule } from './components/job-list/job-list.component-module';
import { JobPostsServiceModule } from './services/job-posts.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'a', component: ProductListComponent },
      { path: '', component: JobListComponent },
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    JobListComponentModule,
    JobPostsServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
