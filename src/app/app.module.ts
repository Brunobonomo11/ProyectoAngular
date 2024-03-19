import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EquiposNuevosComponent } from './equipos-nuevos/equipos-nuevos.component';
import { PageContactoComponent } from './page-contacto/page-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EquiposNuevosComponent,
    PageContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
