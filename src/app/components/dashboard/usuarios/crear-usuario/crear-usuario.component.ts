import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss'],
})
export class CrearUsuarioComponent {
  form: FormGroup;

  constructor(
    private fr: FormBuilder,
    private usuario: UsuarioService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fr.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }
  sexo: any[] = ['masculino', 'femenino'];

  agregarUsuario() {
    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,
    };
    this.usuario.agregarUsuario(user);
    this.form.reset();
    this.router.navigate(['/dashboard/usuarios']);
    this._snackBar.open('Usuario agregado con éxito', 'Cerrar', {
      duration: 4500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
