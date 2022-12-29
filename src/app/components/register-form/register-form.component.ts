import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RoleModel } from '../../models/role.model';
import { UsersService } from '../../services/users.service';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-register-form',
  styleUrls: ['./register-form.component.scss'],
  templateUrl: './register-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    roleId: new FormControl(),
  });
  readonly roles$: Observable<RoleModel[]> = this._rolesService.getAll();

  constructor(private _usersService: UsersService, private _rolesService: RolesService) { }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._usersService
      .create({
        email: registerForm.get('email')?.value,
        roleId: registerForm.get('roleId')?.value,
      })
      .subscribe();
  }
}
