import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from 'src/app/core/guards/security.guard';

const  routes: Routes = [
  {
    path:  '',
    component:  HomeComponent,
    canActivate: [SecurityGuard], data: { expectedRol: ['ROLE_ADMIN', 'ROLE_USER'] }
  }
];


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeModule { }
