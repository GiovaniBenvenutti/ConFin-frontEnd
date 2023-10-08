import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalEntidadeComponent } from './faces/entidade/entidades.cadastrar';
import { PrincipalPatrimonioComponent } from './faces/patrimonio/patrimonio.cadastrar';
import { InitialScreenComponent } from './faces/initial-screen/initial-screen.component';

const routes: Routes = [
  { path : 'entidades-cadastrar', component: PrincipalEntidadeComponent },
  { path : 'patrimonio-cadastrar', component: PrincipalPatrimonioComponent },
  { path : 'inicialScreen-component', component: InitialScreenComponent },
  { path: '', redirectTo: 'inicialScreen-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
