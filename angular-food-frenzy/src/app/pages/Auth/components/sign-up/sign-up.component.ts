import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../../core/services/notifications.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(
    private notif: NotificationsService,
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordVal: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async signUp() {
    if (!this.form.valid) return;

    let formData = this.form.value;

    if (formData.password != formData.passwordVal) {
      this.notif.showNotif('Password Mismatch');
      return;
    }

    let resp = await this.auth.signUp(formData).toPromise();
    resp ? this.notif.showNotif(resp) : this.notif.showNotif('ERROR');
  }
}
