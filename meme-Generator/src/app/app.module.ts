import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorChromeModule } from 'ngx-color/chrome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorComponent } from './generator/generator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorChromeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
