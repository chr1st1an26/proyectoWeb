import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { TeamComponent } from './componentes/team/team.component';
import { PrivacyComponent } from './componentes/privacy/privacy.component';
import {LoginComponent } from './componentes/login/login.component';
import { ColaboracionesComponent } from './componentes/colaboraciones/colaboraciones.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RandomNamesComponent } from './componentes/random-names/random-names.component';
import { VistaProdComponent } from './componentes/vista-prod/vista-prod.component';

const routes: Routes = [{
   path: 'header-component', component: HeaderComponent, 
    children: [

      // { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'PYP', component: PrivacyComponent },
      { path: 'random-names', component: RandomNamesComponent },
      // { path: 'login', component: LoginComponent},
      { path: 'team', component: TeamComponent },
      { path: 'random-names', component: RandomNamesComponent },
      { path: 'colaboraciones', component: ColaboracionesComponent },
      { path: 'productos', component: ProductosComponent},
      {path: 'vista-prod', component: VistaProdComponent}

  
    ],
  },
  {
    path: '',component: LoginComponent, 
  },


  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: '**', component: FooterComponent }

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
