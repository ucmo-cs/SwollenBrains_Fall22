import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatIconModule} from '@angular/material/icon'
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatPaginatorModule} from '@angular/material/paginator'
import{MatSortModule} from '@angular/material/sort'
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './project-page/header-component/header-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusComponent } from './status/status-component/status-component.component';
import { BackgroundComponent } from './project-page/background/background.component';
import { ImageDocumentationComponent } from './image-documentation/image-documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatusComponent,
    BackgroundComponent,
    ImageDocumentationComponent
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
