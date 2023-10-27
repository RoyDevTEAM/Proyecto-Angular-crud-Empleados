import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = []; // Arreglo para almacenar elementos del menú

  constructor(private _menuService: MenuService) {}

  ngOnInit(): void {
    this.cargarMenu(); // Llama a la función para cargar el menú al inicializar el componente
  }

  cargarMenu() {
    // Llama al servicio (_menuService) para obtener el menú y sus elementos
    this._menuService.getMenu().subscribe((response) => (this.menu = response));
    // Utiliza el método "subscribe" para esperar una respuesta asincrónica y asigna el menú al arreglo "menu" cuando se reciba la respuesta.
  }
}
