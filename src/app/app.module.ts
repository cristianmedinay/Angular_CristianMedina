import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UnoComponent } from './components/uno/uno.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { DosComponent } from './components/dos/dos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnoComponent,
    ImagenPipe,
    DosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
