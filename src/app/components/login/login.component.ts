import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private frm: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.frm.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  Ingresar() {
    const user = this.form.value.usuario;
    const pass = this.form.value.password;

    if (user == 'danielv' && pass == 123) {
      this.fakeLoading();
    } else {
      this.Error();
    }

    this.form.reset();
  }
  Error() {
    this._snackBar.open('Usuario y/o contraseñas incorrectos', 'Cerrar', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  fakeLoading() {
    this.loading = true;

    setTimeout(() => {
      this.router.navigate(['/dashboard']);
      this.loading = false;
    }, 1500);
  }
}
