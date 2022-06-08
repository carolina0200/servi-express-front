import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Alerts } from 'src/app/core/alerts/alerts';
import { User } from 'src/app/shared/model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User = {
    id: 1,
    userName: "carolina20",
    firstName: "Carolina",
    lastName: "Giraldo",
    idRole:2
  }

  detailForm: FormGroup;
  constructor(private service: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.detailForm = this.formBuilder.group({
      userName: [undefined, [Validators.required]],
      firstName: [undefined, [Validators.required]],
      lastName: [undefined, [Validators.required]],
      idRole: [undefined, [Validators.required]]
    });
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID', id)
    if(id) {
      this.user = await firstValueFrom(this.service.detail(Number.parseInt(id)));
      this.detailForm.patchValue(this.user);
    }
  }

  delete() {
    Alerts.confirmation('¿Seguro?', '¿Seguro desea eliminar el usuario?', 'Sí', 'No')
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            if(this.user.id) {
              await firstValueFrom(this.service.delete(this.user.id));
            }
            Alerts.successTime('Usuario eliminado');
          } catch (error) {
            Alerts.errorTime('Error eliminando, intente de nuevo');
          }
        }
      })
  }

  async update() {
    if(this.detailForm.valid) {
      this.user = {...this.user, ...this.detailForm.value};
      await firstValueFrom(this.service.update(this.user.id || 0, this.user))
    } else {
      Alerts.warning('Faltan datos', 'Por favor llena toda la información requerida', 'Ok')
    }
  }

}
