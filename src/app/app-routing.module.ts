import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'', component:LayoutComponent, children:[
      {path:'home', component:HomeComponent},
      {path:'conteudo', component:ConteudoComponent},
      {path:'clientes', component:ClienteFormComponent},
      {path:'**', component:Erro404Component},

      
 ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
