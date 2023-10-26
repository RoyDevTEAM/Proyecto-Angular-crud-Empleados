import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario'; // Importa la interfaz Usuario
import { UsuarioService } from 'src/app/services/usuario.service'; // Importa el servicio de Usuario

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent {
  listUsuario: Usuario[] = []; // Arreglo de usuarios
  dataSource!: MatTableDataSource<any>; // Fuente de datos para la tabla

  constructor(
    private _usuarioService: UsuarioService, // Inyecta el servicio de Usuario
    private _snackBar: MatSnackBar // Inyecta el servicio de notificación tipo Snackbar
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios(); // Carga los usuarios al inicializar el componente
  }

  cargarUsuarios() {
    this.listUsuario = this._usuarioService.getUsuario(); // Obtiene la lista de usuarios desde el servicio
    this.dataSource = new MatTableDataSource(this.listUsuario); // Crea una fuente de datos para la tabla
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Configura el paginador de la tabla
    this.dataSource.sort = this.sort; // Configura la capacidad de ordenar de la tabla
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Referencia al paginador de la tabla
  @ViewChild(MatSort) sort!: MatSort; // Referencia a la capacidad de ordenar de la tabla

  displayedColumns: string[] = [
    'usuario',
    'nombre',
    'apellido',
    'sexo',
    'acciones',
  ]; // Columnas que se mostrarán en la tabla

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Obtiene el valor del filtro
    this.dataSource.filter = filterValue.trim().toLowerCase(); // Aplica el filtro a los datos de la tabla
  }

  eliminarUsuario(index: number) {
    this._usuarioService.eliminarUsuario(index); // Llama al servicio para eliminar un usuario
    this.cargarUsuarios(); // Recarga la lista de usuarios
    this._snackBar.open('El usuario fue eliminado con éxito', 'Cerrar', {
      duration: 1500, // Duración del mensaje de notificación
      horizontalPosition: 'center', // Posición horizontal del mensaje
      verticalPosition: 'bottom', // Posición vertical del mensaje
    });
  }
}
