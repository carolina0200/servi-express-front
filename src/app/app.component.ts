import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Loading } from './core/loading/loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loading: Observable<boolean> = Loading.state;
}
