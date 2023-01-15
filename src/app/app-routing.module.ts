import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PaginatorBeerComponent } from './components/paginator-beer/paginator-beer.component';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { PaginatorBeerComponentModule } from './components/paginator-beer/paginator-beer.component-module';
import { CitiesListComponentModule } from './components/cities-list/cities-list.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'a', component: ProductListComponent },
      { path: 'b', component: PaginatorBeerComponent },
      { path: '', component: CitiesListComponent }
    ]),
    ProductListComponentModule,
    PaginatorBeerComponentModule,
    CitiesListComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
