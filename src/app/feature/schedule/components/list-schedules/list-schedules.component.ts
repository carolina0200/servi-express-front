import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Schedule } from 'src/app/shared/model/schedule';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-list-schedules',
  templateUrl: './list-schedules.component.html',
  styleUrls: ['./list-schedules.component.scss']
})
export class ListSchedulesComponent implements OnInit {

  schedules: Schedule[] = [];

  constructor(private scheduleService: ScheduleService) { }

  async ngOnInit() {
    this.schedules = await firstValueFrom(this.scheduleService.getList());
  }

}
