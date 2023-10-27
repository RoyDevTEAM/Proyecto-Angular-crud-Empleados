import { NgModule } from '@angular/core';  // Importa el módulo NgModule desde Angular Core
import { RouterModule, Routes } from '@angular/router';  // Importa los módulos de enrutamiento desde Angular Router
import { DashboardComponent } from './dashboard.component';  // Importa el componente DashboardComponent
import { InicioComponent } from './inicio/inicio.component';  // Importa el componente InicioComponent
import { ReportesComponent } from './reportes/reportes.component';  // Importa el componente ReportesComponent
import { UsuariosComponent } from './usuarios/usuarios.component';  // Importa el componente UsuariosComponent
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';  // Importa el componente CrearUsuarioComponent
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';  // Importa el componente EditarUsuarioComponent

const routes: Routes = [  // Declaración de un array de rutas
  {
    path: '',  // Ruta raíz del componente DashboardComponent
    component: DashboardComponent,  // Asigna el componente DashboardComponent a la ruta raíz
    children: [  // Define rutas secundarias como "children" del componente DashboardComponent
      {
        path: '',  // Ruta vacía que corresponde a la página de inicio
        component: InicioComponent,  // Asigna el componente InicioComponent a esta ruta
      },
      {
        path: 'usuarios',  // Ruta 'usuarios' que corresponde a la página de lista de usuarios
        component: UsuariosComponent,  // Asigna el componente UsuariosComponent a esta ruta
      },
      {
        path: 'editar-usuario/:id',  // Ruta para editar un usuario con un parámetro dinámico ":id"
        component: EditarUsuarioComponent,  // Asigna el componente EditarUsuarioComponent a esta ruta
      },
      {
        path: 'reportes',  // Ruta 'reportes' que corresponde a la página de reportes
        component: ReportesComponent,  // Asigna el componente ReportesComponent a esta ruta
      },
      {
        path: 'crear-usuario',  // Ruta 'crear-usuario' que corresponde a la página de creación de usuarios
        component: CrearUsuarioComponent,  // Asigna el componente CrearUsuarioComponent a esta ruta
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Configura las rutas utilizando el array de rutas definido anteriormente
  exports: [RouterModule],  // Exporta el módulo de enrutamiento para su uso en otros componentes
})
export class DashboardRoutingModule {}  // Define y exporta el módulo de enrutamiento de Dashboard
