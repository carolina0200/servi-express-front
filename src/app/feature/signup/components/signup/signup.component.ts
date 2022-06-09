import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private service: SignupService, private formBuilder: FormBuilder, private router: Router) {
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
      Alerts.success('Registrado correctamente');
      if(this.role == 'ROLE_ADMIN') {
        this.signupForm.reset();
      } else {        
        this.router.navigateByUrl('/login');
      }
    } else {
      Alerts.warning('Faltan datos', 'Por favor llena toda la información requerida', 'Ok')
    }
  }

}
