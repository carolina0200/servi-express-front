import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/app/shared/model/user';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private service: SignupService, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      user: [undefined, [Validators.required]],
      name: [undefined, [Validators.required]],
      lastname: [undefined, [Validators.required]],
      password: [undefined, [Validators.required]]
    });
  }

  async signUp() {
    console.log(this.signupForm.value)
    if(this.signupForm.valid) {
      const user: User = new User(this.signupForm.value.user,
        this.signupForm.value.name, 
        this.signupForm.value.lastname, 
        this.signupForm.value.password, 1);
      await firstValueFrom(this.service.signUp(user));
    }
  }

}
