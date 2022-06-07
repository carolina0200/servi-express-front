import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { InterceptorProvider } from 'src/app/core/interceptors/jwt.interceptor';


@NgModule({
  declarations: [
    UserDetailComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    InterceptorProvider
  ]
})
export class UsersModule { }
