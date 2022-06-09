import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Alerts } from '../alerts/alerts';
import { Loading } from '../loading/loading';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private zone: NgZone,
    private router: Router
  ) {}

  handleError(error: any) {
    Loading.state.next(false);
    this.zone.run(() => 
      {
        Loading.state.next(false);
        console.error('Error', error.rejection?.error || error)
        if (error.rejection?.error && error.rejection.error?.responseMessages) {
          Alerts.error('', error.rejection.error.responseMessages[0]);
        } else if (error.rejection?.error && error.rejection.error?.message) {
          Alerts.error('', error.rejection.error.message);
        }
      }
    );

  }
}