import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Loading } from '../loading/loading';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private zone: NgZone,
    private router: Router
  ) {}

  handleError(error: any) {

    console.error('Error from global error handler', error);

    Loading.state.next(false);
  }
}