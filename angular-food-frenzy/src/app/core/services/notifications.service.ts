import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private snackBar: MatSnackBar, private auth: AuthService) {}

  public showNotif(message, action = 'ok', duration = 4000): void {
    this.snackBar
      .open(message, action, { duration, panelClass: 'notification' })
      .onAction()
      .subscribe(() => {
        console.log('Notififcation action performed');
      });
  }

  public notImplementedWarning(message, duration = 4000): void {
    // @ts-ignore
    this.snackBar
      .open(`"${message}" is not implemented`, 'error', {
        duration,
        panelClass: 'notification',
      })
      .onAction()
      .subscribe(() => {});
  }
}
