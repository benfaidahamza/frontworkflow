import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { IndexSidebarComponent } from './components/sidebars/index-sidebar/index-sidebar.component';
import { AccueilComponent } from './components/views/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexNavbarComponent,
    IndexSidebarComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
