import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Alerts } from 'src/app/core/alerts/alerts';
import { User } from 'src/app/shared/model/user';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm: FormGroup;
  role;
  constructor(private service: SignupService, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      userName: [undefined, [Validators.required]],
      firstName: [undefined, [Validators.required]],
      lastName: [undefined, [Validators.required]],
      password: [undefined, [Validators.required]],
      idRole: [2, [Validators.required]]
    });

    this.role = localStorage.getItem('role');
  }

  async signUp() {
    if(this.signupForm.valid) {
      const user: User = {...this.signupForm.value};
      await firstValueFrom(this.service.signUp(user));
    } else {
      Alerts.warning('Faltan datos', 'Por favor llena toda la información requerida', 'Ok')
    }
  }

}
