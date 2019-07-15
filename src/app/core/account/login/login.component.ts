import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GlobalsService } from '../../services/globals.service';
import { ViasConnectionService, ViasResponse } from '../../services/vias-connection.service';

@Component({
  selector: 'vias-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('errorTxt') errorTxt: ElementRef;

  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public globals: GlobalsService,
    private viasService: ViasConnectionService) { }

    private username: string = '';
    private rememberMe: boolean = false;

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      remember: []
    });
    if (this.globals.rememberLoginName !== undefined
      && this.globals.rememberLoginName !== null
      && this.globals.rememberLoginName.length > 0
    ) {
        this.form.setValue({
          username: this.globals.rememberLoginName,
          password: '',
          remember: true
        });
    }
  }

  onSubmit() {
    this.router.navigate(['/']);
  }

  // sifreyi sifrele
  encryptPassword(str: string): string {
    for (let i = 0; i < 5; i++) {
      str = btoa(str).split('').reverse().join('');
    }
    return str;
  }

  validateLoginData(): boolean {
    let allOk: boolean = true;
    if (! (this.form.value.username.length > 2) ) {
      this.errorTxt.nativeElement.innerHTML = 'Kullanınıcı Adınızı Hatalıdır';
      allOk = false;
    }
    if (! (this.form.value.password.length > 2) ) {
      this.errorTxt.nativeElement.innerHTML = 'Şifreniz Hatalıdır';
      allOk = false;
    }
    return allOk;
  }

  // ?data={%22username%22:%22hob%22,%22password%22:%22iZkWyZleGNlUsRmeX1GdXJ1aKVVVB1TP%22,%22firmId%22:2}
  login(): void {
    console.log(this.form.value);
    if (this.validateLoginData()) {
      if (this.form.value.remember === true) {
        this.globals.rememberLoginName = this.form.value.username;
      } else {
        this.globals.rememberLoginName = '';
      }
      this.viasService.send(0, 0, {
        username: this.form.value.username,
        password: this.encryptPassword(this.form.value.password),
        firmId: this.globals.selectedFirmId,
      }).then(response => this.serviceHandler(response));
    }
  }
  // login servis handler
  serviceHandler(r: ViasResponse) {
    // hatalar
    if (r.error) {
      this.errorTxt.nativeElement.innerHTML = 'Kullanıcı Adınız veya Şifreniz Hatalıdır';
    }
    // sayfa yetkileri
    if (r.perm) {

    }
    // return action
    if (r.return_action) {

    }
    // gelen veriler
    if (r.data) {
      /// login bilgileri
      if (r.data.hasOwnProperty('login_bilgileri')) {
        const login = r.data['login_bilgileri'];
        // global degiskenleri set et
        this.globals.userNameSurname = login.name + ' ' + login.surname;
        this.globals.userId = login.id;
        this.globals.userSectionId = login.section_id;
        this.globals.userDepartmentId = login.department_id;
        this.globals.userDefaultModuleId = login.default_module_id;
        this.globals.userDefaultPageId = login.default_page_id;
        this.globals.userDefaultActionId = login.default_action_id;

        // dashboard sayfaasina gonder
        this.router.navigate(['/']);
      }
    }
  }
}
