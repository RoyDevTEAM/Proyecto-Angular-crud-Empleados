import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {
      usuario: 'Luchitopue',
      nombre: 'luis',
      apellido: 'rojas',
      sexo: 'Masculino',
    },
    {
      usuario: 'advincula',
      nombre: 'Sheyla',
      apellido: 'Rojas',
      sexo: 'Femenino',
    },
    {
      usuario: 'DaniV',
      nombre: 'Daniel',
      apellido: 'Vilela',
      sexo: 'Masculino',
    },
    {
      usuario: 'Rodrigo3000',
      nombre: 'Rodrigo',
      apellido: 'Córdova',
      sexo: 'Masculino',
    },
    {
      usuario: 'Dark',
      nombre: 'Cid',
      apellido: 'Kagenou',
      sexo: 'Masculino',
    },
    {
      usuario: 'Alma12',
      nombre: 'Alma',
      apellido: 'Marcela',
      sexo: 'Femenino',
    },
    {
      usuario: 'Luz203',
      nombre: 'Camila',
      apellido: 'Perez',
      sexo: 'Femenino',
    },
  ];
  constructor() {}

  getUsuario() {
    return this.listUsuarios.slice();
  }
  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }
  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }
  obtenerUsuarioPorIndex(index: number): Usuario | undefined {
    if (index >= 0 && index < this.listUsuarios.length) {
      return this.listUsuarios[index];
    }
    return undefined;
  }

  editarUsuario(index: number, nuevoUsuario: Usuario): void {
    if (index >= 0 && index < this.listUsuarios.length) {
      this.listUsuarios[index] = nuevoUsuario;
    }
  }
 
}
