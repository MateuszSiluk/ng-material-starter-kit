import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { UsersServiceModule } from './services/users.service-module';
import { RolesServiceModule } from './services/roles.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: 'create-user-with-role', component: RegisterFormComponent }]),
    RegisterFormComponentModule,
    UsersServiceModule,
    RolesServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
