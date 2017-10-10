import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BookRatingComponent } from './book-rating/book-rating.component';
import { BookToolbarComponent } from './book-toolbar/book-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookRatingComponent,
    BookToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
