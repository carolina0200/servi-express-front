import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { CreateScheduleComponent } from './components/create-schedule/create-schedule.component';
import { ListSchedulesComponent } from './components/list-schedules/list-schedules.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScheduleService } from './services/schedule.service';
import { InterceptorProvider, JwtInterceptor } from 'src/app/core/interceptors/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


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
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ]
})
export class ScheduleModule { }
