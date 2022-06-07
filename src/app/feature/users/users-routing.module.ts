import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from 'src/app/core/guards/security.guard';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const  routes: Routes = [
  {
    path:  '', component:  ListUsersComponent,
    canActivate: [SecurityGuard], data: { expectedRol: ['ROLE_ADMIN'] }
  },
  {
    path:  ':id', component:  UserDetailComponent,
    canActivate: [SecurityGuard], data: { expectedRol: ['ROLE_ADMIN'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
