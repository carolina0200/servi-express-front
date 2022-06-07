import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Schedule } from 'src/app/shared/model/schedule';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.scss']
})
export class CreateScheduleComponent implements OnInit {

  scheduleForm: FormGroup;

  constructor(private scheduleService: ScheduleService, private formBuilder: FormBuilder) {
    this.scheduleForm = this.formBuilder.group({
      type: [undefined, [Validators.required]], // select 
      description: [undefined, [Validators.required]], // textarea
      date: [undefined, [Validators.required]] // date
    });
  }

  ngOnInit(): void {
  }

  async create() {
    if(this.scheduleForm.valid) {      
      const schedule = new Schedule(this.scheduleForm.value.type, this.scheduleForm.value.description, this.scheduleForm.value.date, 1, 1)
      const response = await firstValueFrom(this.scheduleService.create(schedule));
    }
  }

}
