import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
<<<<<<< Updated upstream
// import { AuthService } from 'src/app/services/auth.service';
// import { FormsModule } from '@angular/forms';
// import {AngularFireModule} from '@angular/fire/compat';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
=======
import { FormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { AuthService } from 'src/app/auth.service';
>>>>>>> Stashed changes


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(30)],
    ],
  });

  isInvalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private crudService: CrudService,
    private authService: AuthService
  ) {}

  login() {
    this.isInvalid = false;

    // if (!this.loginForm.valid) {
    //   this.isInvalid = true;
    //   return;
    // }

    const { email, password } = this.loginForm.value;

    this.crudService.getAll().forEach((userList) => {
      const user = userList.find((user) => user.email === email);

      if (user && user.password === password) {
        this.authService.user = user;
        this.authService.setIsAuth = true;
        this.router.navigate(['/home']);
      }
      this.isInvalid = true;
    });
  }
}

