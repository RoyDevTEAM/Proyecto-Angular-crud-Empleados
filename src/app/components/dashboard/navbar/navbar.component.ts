import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];

  constructor(private _menuService: MenuService) {}
  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu() {
    this._menuService.getMenu().subscribe((response) => (this.menu = response));
  }
}
