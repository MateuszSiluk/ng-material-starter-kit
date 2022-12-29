import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { UsersServiceModule } from './services/users.service-module';
import { RolesServiceModule } from './services/roles.service-module';
import { JobFormComponentModule } from './components/job-form/job-form.component-module';
import { JobPostsServiceModule } from './services/job-posts.service-module';
import { JobTagsServiceModule } from './services/job-tags.service-module';
import { CartFormComponentModule } from './components/cart-form/cart-form.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CartsServiceModule } from './services/carts.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-user-with-role', component: RegisterFormComponent },
      { path: 'create-job', component: JobFormComponent },
      { path: ':id/cart', component: CartFormComponent },
    ]),
    RegisterFormComponentModule,
    UsersServiceModule,
    RolesServiceModule,
    JobFormComponentModule,
    JobPostsServiceModule,
    JobTagsServiceModule,
    CartFormComponentModule,
    ProductsServiceModule,
    CartsServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
