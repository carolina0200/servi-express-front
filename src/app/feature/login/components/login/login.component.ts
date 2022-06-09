import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private service: LoginService, private formBuilder: FormBuilder) {
    localStorage.setItem('token', '');
    this.loginForm = this.formBuilder.group({
      user: [undefined, [Validators.required]],
      password: [undefined, [Validators.required]]
    });
  }

  async login() {
    if(this.loginForm.valid) {
      await firstValueFrom(this.service.login(this.loginForm.value.user, this.loginForm.value.password));
    }
  }
}
