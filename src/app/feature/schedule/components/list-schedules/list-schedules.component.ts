import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Alerts } from 'src/app/core/alerts/alerts';
import { Schedule } from 'src/app/shared/model/schedule';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-list-schedules',
  templateUrl: './list-schedules.component.html',
  styleUrls: ['./list-schedules.component.scss']
})
export class ListSchedulesComponent implements OnInit {

  schedules: Schedule[] = [
    {
      "type":"recogida",
      "description":"entrega 1",
      "date":"2022-04-07T18:32:50.558095800",
      "user":"Carolina",
      "warehouse":1,
      "id":1
    }
  ];

  constructor(private scheduleService: ScheduleService) { }

  async ngOnInit() {
    this.schedules = await firstValueFrom(this.scheduleService.getList());
  }

  delete(id: any) {
    Alerts.confirmation('¿Seguro?', '¿Seguro desea eliminar el agendamiento?', 'Sí', 'No')
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            await firstValueFrom(this.scheduleService.delete(id));
            Alerts.successTime('Agendamiento eliminado');
          } catch (error) {
            Alerts.errorTime('Error eliminando, intente de nuevo');
          }
        }
      })
  }

}
