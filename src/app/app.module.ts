import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule,  } from '@angular/common/http'; 

import { CommonModule} from '@angular/common'

import { sovtechs } from './sovtechAPI';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
