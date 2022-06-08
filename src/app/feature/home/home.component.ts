import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  role: string = '';
  user: string = '';
  constructor() { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role') || '';
    this.user = localStorage.getItem('user') || '';
  }

}
