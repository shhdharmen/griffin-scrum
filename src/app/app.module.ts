import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GeneratorWrapperComponent } from './generator-wrapper/generator-wrapper.component';
import { PreviewWrapperComponent } from './preview-wrapper/preview-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    GeneratorWrapperComponent,
    PreviewWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
