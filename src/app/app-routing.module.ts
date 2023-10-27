import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EditarUsuarioComponent } from './dashboard/usuarios/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {
    path: '', // Ruta raíz
    redirectTo: 'login', // Redirige a la ruta 'login' si se accede a la raíz
    pathMatch: 'full', // Se debe hacer coincidir completamente con la ruta raíz
  },
  {
    path: 'dashboard/usuarios/editar-usuario', // Ruta para editar un usuario
    component: EditarUsuarioComponent, // Utiliza el componente 'EditarUsuarioComponent'
  },
  {
    path: 'login', // Ruta para el inicio de sesión
    component: LoginComponent, // Utiliza el componente 'LoginComponent'
  },
  {
    path: 'dashboard', // Ruta del panel de control
    loadChildren: () => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule), // Carga el módulo 'DashboardModule' de forma dinámica
  },
  {
    path: '**', // Cualquier otra ruta que no coincida con las definidas
    redirectTo: 'login', // Redirige a la ruta 'login'
    pathMatch: 'full', // Debe coincidir completamente con la ruta
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas principales
  exports: [RouterModule], // Exporta el módulo de enrutamiento
})
export class AppRoutingModule {}
