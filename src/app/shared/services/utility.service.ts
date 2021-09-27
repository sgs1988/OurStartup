import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string, messageType: any): void  {
    const config = new MatSnackBarConfig();
    config.duration = 10000;
    config.panelClass = [messageType];
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';

    const snackBarRef = this.snackBar.open(message, 'Dismiss', config);
    snackBarRef.onAction().subscribe(() => this.snackBar.dismiss());
  }

  setCookie = (name: any, val: string) => {
      const date = new Date();
      const value: any = btoa(val);
      const encodeName = btoa(name);
      // Set it expire in 1 day
      date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
      // Set it
      document.cookie = encodeName + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
  }

  getCookie = (name: any) => {
      const encodeName = btoa(name);
      const value: any = '; ' + document.cookie;
      const parts: any = value.split('; ' + encodeName + '=');

      if (parts.length === 2) {
          let returnParts = parts.pop().split(';').shift();
          if (window) {
              returnParts = window.atob(returnParts);
          }
          return returnParts;
      }
  }

  deleteCookie = (name: string) => {
      const date = new Date();
      const encodeName = btoa(name);
      // Set it expire in -1 days
      date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
      // Set it
      document.cookie = encodeName + '=; expires=' + date.toUTCString() + '; path=/';
  }

  deleteAllCookie = () => {
      const cookies = document.cookie.split(';');
      for (const val of cookies) {
          const cookie = val;
          const eqPos = cookie.indexOf('=');
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }
  }
}
