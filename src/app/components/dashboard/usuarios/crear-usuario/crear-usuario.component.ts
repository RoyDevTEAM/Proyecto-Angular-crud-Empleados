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
  form: FormGroup; // Formulario para crear un nuevo usuario

  constructor(
    private fr: FormBuilder, // Inyección del servicio FormBuilder para construir formularios
    private usuario: UsuarioService, // Inyección del servicio UsuarioService para gestionar usuarios
    private _snackBar: MatSnackBar, // Inyección del servicio MatSnackBar para mostrar notificaciones tipo Snackbar
    private router: Router // Inyección del servicio Router para la navegación
  ) {
    // Inicialización del formulario con campos y validadores
    this.form = this.fr.group({
      usuario: ['', Validators.required], // Campo "usuario" con validación de requerido
      nombre: ['', Validators.required], // Campo "nombre" con validación de requerido
      apellido: ['', Validators.required], // Campo "apellido" con validación de requerido
      sexo: ['', Validators.required], // Campo "sexo" con validación de requerido
    });
  }

  sexo: any[] = ['masculino', 'femenino']; // Opciones de selección para el campo "sexo"

  agregarUsuario() {
    // Crear un nuevo objeto de usuario con los datos del formulario
    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,
    };

    // Llamar al servicio para agregar el nuevo usuario
    this.usuario.agregarUsuario(user);

    // Restablecer el formulario después de agregar el usuario
    this.form.reset();

    // Redirigir a la lista de usuarios en el panel de control
    this.router.navigate(['/dashboard/usuarios']);

    // Mostrar una notificación de éxito utilizando MatSnackBar
    this._snackBar.open('Usuario agregado con éxito', 'Cerrar', {
      duration: 4500, // Duración del mensaje de notificación (en milisegundos)
      horizontalPosition: 'center', // Posición horizontal del mensaje
      verticalPosition: 'bottom', // Posición vertical del mensaje
    });
  }
}
