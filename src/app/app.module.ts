import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GobanComponent } from './goban/goban.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SgfEditorComponent } from './sgf-editor/sgf-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    GobanComponent,
    PageNotFoundComponent,
    SgfEditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
