import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { UsersServiceModule } from './services/users.service-module';
import { RolesServiceModule } from './services/roles.service-module';
import { JobFormComponentModule } from './components/job-form/job-form.component-module';
import { JobPostsServiceModule } from './services/job-posts.service-module';
import {JobTagsServiceModule} from './services/job-tags.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: 'create-user-with-role', component: RegisterFormComponent }, { path: 'create-job', component: JobFormComponent }]),
    RegisterFormComponentModule,
    UsersServiceModule,
    RolesServiceModule,
    JobFormComponentModule,
    JobPostsServiceModule,
    JobTagsServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
