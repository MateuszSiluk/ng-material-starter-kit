import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductMasterComponent } from './components/product-master/product-master.component';
import { EmployeeMasterComponent } from './components/employee-master/employee-master.component';
import { CryptoMasterComponent } from './components/crypto-master/crypto-master.component';
import { ProductMasterComponentModule } from './components/product-master/product-master.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { EmployeeMasterComponentModule } from './components/employee-master/employee-master.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { CryptoMasterComponentModule } from './components/crypto-master/crypto-master.component-module';
import { CryptoCurrencyServiceModule } from './services/crypto-currency.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products-master-details', component: ProductMasterComponent },
      { path: 'employees-master-details', component: EmployeeMasterComponent },
      { path: 'crypto-master-details', component: CryptoMasterComponent },
    ]),
    ProductMasterComponentModule,
    ProductsServiceModule,
    EmployeeMasterComponentModule,
    EmployeesServiceModule,
    CryptoMasterComponentModule,
    CryptoCurrencyServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
