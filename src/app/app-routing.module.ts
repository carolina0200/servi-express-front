import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./feature/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./feature/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./feature/schedule/schedule.module').then(m => m.ScheduleModule)
  },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
