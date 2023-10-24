import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent {
  listUsuario: Usuario[] = [];
  dataSource!: MatTableDataSource<any>;

  constructor(
    private _usuarioService: UsuarioService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.listUsuario = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuario);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'usuario',
    'nombre',
    'apellido',
    'sexo',
    'acciones',
  ];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  eliminarUsuario(index: number) {
    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();
    this._snackBar.open('El usuario fue eliminado con éxito', 'Cerrar', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
