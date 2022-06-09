import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/app/shared/model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: User[] = [];

  constructor(private service: UserService) { }

  async ngOnInit() {
    this.users = await firstValueFrom(this.service.getUserList());
  }

}
