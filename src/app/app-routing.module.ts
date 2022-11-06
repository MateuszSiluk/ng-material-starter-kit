import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { AuthenticationFormComponent } from './components/authentication-form/authentication-form.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { AuthenticationFormComponentModule } from './components/authentication-form/authentication-form.component-module';
import { AuthenticationServiceModule } from './services/authentication.service-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { RegisterUserFormComponentModule } from './components/register-user-form/register-user-form.component-module';
import { UsersServiceModule } from './services/users.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: EmployeeFormComponent },
      { path: 'login', component: AuthenticationFormComponent },
      { path: 'register', component: RegisterUserFormComponent },
    ]),
    ProductFormComponentModule,
    ProductsServiceModule,
    EmployeeFormComponentModule,
    EmployeesServiceModule,
    AuthenticationFormComponentModule,
    AuthenticationServiceModule,
    CategoriesServiceModule,
    RegisterUserFormComponentModule,
    UsersServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
