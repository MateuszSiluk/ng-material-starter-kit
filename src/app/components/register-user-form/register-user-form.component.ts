import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register-user-form',
  styleUrls: ['./register-user-form.component.scss'],
  templateUrl: './register-user-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterUserFormComponent {
  readonly userRegistrationForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    houseNumber: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
  });

  constructor(private _usersService: UsersService) {}

  onUserRegistrationFormSubmitted(userRegistrationForm: FormGroup): void {
    if (userRegistrationForm.invalid) {
      return;
    }
    this._usersService
      .create({
        email: userRegistrationForm.get('email')?.value,
        username: userRegistrationForm.get('userName')?.value,
        password: userRegistrationForm.get('password')?.value,
        name: {
          firstname: userRegistrationForm.get('firstName')?.value,
          lastname: userRegistrationForm.get('lastName')?.value,
        },
        address: {
          city: userRegistrationForm.get('city')?.value,
          street: userRegistrationForm.get('street')?.value,
          number: userRegistrationForm.get('houseNumber')?.value,
          zipcode: userRegistrationForm.get('zipCode')?.value,
        },
        phone: userRegistrationForm.get('phoneNumber')?.value,
      })
      .subscribe();
  }
}
