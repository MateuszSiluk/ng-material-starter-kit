import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-authentication-form',
  styleUrls: ['./authentication-form.component.scss'],
  templateUrl: './authentication-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationFormComponent {
  readonly authenticationForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private _authenticationService: AuthenticationService) {}

  onAuthenticationFormSubmitted(authenticationForm: FormGroup): void {
    if (authenticationForm.invalid) {
      return;
    }
    this._authenticationService
      .login({
        username: authenticationForm.get('username')?.value,
        password: authenticationForm.get('password')?.value,
      })
      .subscribe();
  }
}
