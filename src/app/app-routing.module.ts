import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductMasterComponent } from './components/product-master/product-master.component';
import { EmployeeMasterComponent } from './components/employee-master/employee-master.component';
import { ProductMasterComponentModule } from './components/product-master/product-master.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { EmployeeMasterComponentModule } from './components/employee-master/employee-master.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products-master-details', component: ProductMasterComponent },
      { path: 'employees-master-details', component: EmployeeMasterComponent },
    ]),
    ProductMasterComponentModule,
    ProductsServiceModule,
    EmployeeMasterComponentModule,
    EmployeesServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
