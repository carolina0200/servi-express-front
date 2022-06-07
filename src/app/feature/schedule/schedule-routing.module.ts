import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from 'src/app/core/guards/security.guard';
import { CreateScheduleComponent } from './components/create-schedule/create-schedule.component';
import { ListSchedulesComponent } from './components/list-schedules/list-schedules.component';

const  routes: Routes = [
  {
    path:  'crear', component:  CreateScheduleComponent,
    canActivate: [SecurityGuard], data: { expectedRol: ['ROLE_USER'] }
  },
  {
    path:  'listar', component:  ListSchedulesComponent,
    canActivate: [SecurityGuard], data: { expectedRol: ['ROLE_ADMIN'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
