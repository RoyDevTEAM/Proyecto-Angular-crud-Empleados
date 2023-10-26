import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importa el servicio de notificaciones Snackbar
import { Router } from '@angular/router'; // Importa el enrutador de Angular

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./login.component.scss'], // Hojas de estilo CSS asociadas al componente
})
export class LoginComponent {
  form: FormGroup; // Formulario reactivo
  loading = false; // Variable para controlar la carga

  constructor(
    private frm: FormBuilder, // Inyecta el servicio FormBuilder para crear el formulario
    private _snackBar: MatSnackBar, // Inyecta el servicio de notificaciones Snackbar
    private router: Router // Inyecta el enrutador
  ) {
    // Inicializa el formulario con campos de usuario y contraseña
    this.form = this.frm.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Método para intentar el inicio de sesión
  Ingresar() {
    const user = this.form.value.usuario; // Obtiene el valor del campo usuario desde el formulario
    const pass = this.form.value.password; // Obtiene el valor del campo contraseña desde el formulario

    // Comprueba si las credenciales son correctas (esto es un ejemplo, se debe reemplazar con autenticación real)
    if (user == 'Royder' && pass == 123) {
      this.fakeLoading(); // Simula una carga antes de redirigir al panel de control
    } else {
      this.Error(); // Muestra una notificación de error
    }

    this.form.reset(); // Limpia el formulario después del intento de inicio de sesión
  }

  // Método para mostrar un mensaje de error
  Error() {
    this._snackBar.open('Usuario y/o contraseñas incorrectos', 'Cerrar', {
      duration: 4000, // Duración del mensaje de notificación
      horizontalPosition: 'center', // Posición horizontal del mensaje
      verticalPosition: 'bottom', // Posición vertical del mensaje
    });
  }

  // Método para simular una carga antes de redirigir al panel de control
  fakeLoading() {
    this.loading = true; // Activa la variable de carga

    // Simula una carga durante 1500 ms (1.5 segundos)
    setTimeout(() => {
      this.router.navigate(['/dashboard']); // Redirige al panel de control
      this.loading = false; // Desactiva la variable de carga
    }, 1500);
  }
}
