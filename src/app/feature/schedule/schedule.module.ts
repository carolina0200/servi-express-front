import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { CreateScheduleComponent } from './components/create-schedule/create-schedule.component';
import { ListSchedulesComponent } from './components/list-schedules/list-schedules.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScheduleService } from './services/schedule.service';
import { InterceptorProvider } from 'src/app/core/interceptors/jwt.interceptor';


@NgModule({
  declarations: [
    CreateScheduleComponent,
    ListSchedulesComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ScheduleService,
    InterceptorProvider
  ]
})
export class ScheduleModule { }
