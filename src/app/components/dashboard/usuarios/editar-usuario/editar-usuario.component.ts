import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss'],
})
export class EditarUsuarioComponent {
  form: FormGroup;
  usuarioId!: number; // El índice del usuario que se va a editar

  constructor(
    private fr: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fr.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }

  sexo: any[] = ['masculino', 'femenino'];

  ngOnInit(): void {
    // Obtener el índice del usuario de los parámetros de la ruta
    this.route.params.subscribe((params) => {
      this.usuarioId = +params['id']; // Suponiendo que el parámetro sea 'id'
      this.cargarDatosUsuario();
    });
  }

  cargarDatosUsuario() {
    // Obtener los datos del usuario por su índice desde el servicio
    const usuario = this.usuarioService.obtenerUsuarioPorIndex(this.usuarioId);

    if (usuario) {
      // Llenar el formulario con los datos del usuario
      this.form.patchValue(usuario);
    }
  }

  editarUsuario() {
    // Obtener los datos del formulario
    const usuario: Usuario = this.form.value;

    // Actualizar el usuario en el servicio
    this.usuarioService.editarUsuario(this.usuarioId, usuario);

    // Redirigir de nuevo a la lista de usuarios
    this.router.navigate(['/dashboard/usuarios']);
  }
}
