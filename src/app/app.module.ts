import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SendingSectionComponent } from './components/sending-section/sending-section.component';
import { ReceivingSectionComponent } from './components/receiving-section/receiving-section.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CurrencyBodyComponent } from './components/currency-body/currency-body.component';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SendingSectionComponent,
    ReceivingSectionComponent,
    FooterComponent,
    CurrencyBodyComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
