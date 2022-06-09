import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Alerts } from 'src/app/core/alerts/alerts';
import { Schedule } from 'src/app/shared/model/schedule';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.scss']
})
export class CreateScheduleComponent implements OnInit {

  scheduleForm: FormGroup;

  code: string = '';

  minDate = '';

  timeList = [
    { value:'09:00', label:'9:00AM' },
    { value:'09:15', label:'9:15AM' },
    { value:'09:30', label:'9:30AM' },
    { value:'09:45', label:'9:45AM' },
    { value:'10:00', label:'10:00AM' },
    { value:'10:15', label:'10:15AM' },
    { value:'10:30', label:'10:30AM' },
    { value:'10:45', label:'10:45AM' },
    { value:'11:00', label:'11:00AM' },
    { value:'11:15', label:'11:15AM' },
    { value:'11:30', label:'11:30AM' },
    { value:'11:45', label:'11:45AM' },
    { value:'12:00', label:'12:00PM' },
    { value:'12:15', label:'12:15PM' },
    { value:'12:30', label:'12:30PM' },
    { value:'12:45', label:'12:45PM' },
    { value:'13:00', label:'01:00PM' },
    { value:'13:15', label:'01:15PM' },
    { value:'13:30', label:'01:30PM' },
    { value:'13:45', label:'01:45PM' },
    { value:'14:00', label:'02:00PM' },
    { value:'14:15', label:'02:15PM' },
    { value:'14:30', label:'02:30PM' },
    { value:'14:45', label:'02:45PM' },
    { value:'15:00', label:'03:00PM' },
    { value:'15:15', label:'03:15PM' },
    { value:'15:30', label:'03:30PM' },
    { value:'15:45', label:'03:45PM' },
    { value:'16:00', label:'04:00PM' },
    { value:'16:15', label:'04:15PM' },
    { value:'16:30', label:'04:30PM' },
    { value:'16:45', label:'04:45PM' },
    { value:'17:00', label:'05:00PM' },
    { value:'17:15', label:'05:15PM' },
    { value:'17:30', label:'05:30PM' },
    { value:'17:45', label:'05:45PM' },
    { value:'20:50', label:'20:37PM' },
  ];

  constructor(private scheduleService: ScheduleService, private formBuilder: FormBuilder) {
    this.scheduleForm = this.formBuilder.group({
      type: [undefined, [Validators.required]],
      description: [undefined, [Validators.required]],
      date: [undefined, [Validators.required]],
      time: [undefined, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.minDate = new Date().toISOString().split("T")[0];
    console.log(this.minDate);
  }

  async create() {
    if(this.scheduleForm.valid) {
      const schedule = new Schedule(
        this.scheduleForm.value.type,
        this.scheduleForm.value.description,
        this.scheduleForm.value.date+'T'+this.scheduleForm.value.time+':00.000000000',
        localStorage.getItem('user') || '', 4
      )
      console.log(schedule);
      
      const response = await firstValueFrom(this.scheduleService.create(schedule));
      this.scheduleForm.reset();
      console.log('Agendamiento',response);
      this.code = response.code || '';

    } else {
      Alerts.warning('Faltan datos', 'Por favor llena toda la información requerida', 'Ok')
    }
  }

  showTime(time: string) {
    if(Number.parseInt(this.minDate.split("-")[2]) == Number.parseInt(this.scheduleForm.value.date?.split("-")[2])) {
      const hour = Number.parseInt(time.split(':')[0])
      return hour > new Date().getHours();
    }
    return true;
  }

}
