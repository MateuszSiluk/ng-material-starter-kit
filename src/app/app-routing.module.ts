import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { AuthenticationFormComponent } from './components/authentication-form/authentication-form.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { AuthenticationFormComponentModule } from './components/authentication-form/authentication-form.component-module';
import { AuthenticationServiceModule } from './services/authentication.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: EmployeeFormComponent },
      { path: 'login', component: AuthenticationFormComponent }
    ]),
    ProductFormComponentModule,
    ProductsServiceModule,
    EmployeeFormComponentModule,
    EmployeesServiceModule,
    AuthenticationFormComponentModule,
    AuthenticationServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
