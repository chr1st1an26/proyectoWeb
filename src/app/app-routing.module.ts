import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { TeamComponent } from './componentes/team/team.component';
import { PrivacyComponent } from './componentes/privacy/privacy.component';
import {LoginComponent } from './componentes/login/login.component';
import { ColaboracionesComponent } from './componentes/colaboraciones/colaboraciones.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'PYP', component: PrivacyComponent },
  { path: 'login', component: LoginComponent},
  { path: 'team', component: TeamComponent },
  { path: 'colaboraciones', component: ColaboracionesComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '**', component: FooterComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
