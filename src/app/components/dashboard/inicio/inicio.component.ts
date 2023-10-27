// Importación del decorador 'Component' y 'Component' desde el módulo '@angular/core'
import { Component } from '@angular/core';

// Definición de un nuevo componente llamado 'InicioComponent'
@Component({
  // Selector HTML para representar este componente en la vista
  selector: 'app-inicio',

  // Plantilla HTML asociada al componente
  templateUrl: './inicio.component.html',

  // Hojas de estilo asociadas al componente (archivo de estilos CSS o SCSS)
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  // La clase 'InicioComponent' representa la lógica y el comportamiento del componente.
  // Puede contener propiedades, métodos y lógica específica del componente.
}
