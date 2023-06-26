import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
// import {AngularFireModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { TeamComponent } from './componentes/team/team.component';
import { PrivacyComponent } from './componentes/privacy/privacy.component';
import { ColaboracionesComponent } from './componentes/colaboraciones/colaboraciones.component';
import { SociosComponent } from './componentes/socios/socios.component';
import { LoginComponent } from './componentes/login/login.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';



const firebaseConfig = {
  apiKey: "AIzaSyCctzT1dCjSnbdo2oMbLc6_3GGYJYJr_GM",
  authDomain: "fir-bd-757f6.firebaseapp.com",
  projectId: "fir-bd-757f6",
  storageBucket: "fir-bd-757f6.appspot.com",
  messagingSenderId: "215459649770",
  appId: "1:215459649770:web:fac056ecdf1920d16c5f93",
  measurementId: "G-1SZ21MJM9Z"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    PrivacyComponent,
    ColaboracionesComponent,
    SociosComponent,
    LoginComponent,
    HeaderComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
