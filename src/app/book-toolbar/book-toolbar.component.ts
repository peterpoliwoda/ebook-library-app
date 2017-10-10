import { Component } from '@angular/core';

@Component({
  selector: 'app-ebooks-toolbar',
  template: `<mat-toolbar color="primary">
  <mat-icon class="ebooks-icon">book</mat-icon>
  <span>eBook Library</span>
  <span class="ebooks-spacer"></span>
  <button mat-icon-button [matMenuTriggerFor]="menu">
      <mat-icon>more_vert</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>
        <mat-icon>watch_later</mat-icon>
        <span>by Recent</span>
      </button>
      <button mat-menu-item>
        <mat-icon>rate_review</mat-icon>
        <span>by Rating</span>
      </button>
      <button mat-menu-item>
        <mat-icon>perm_identity</mat-icon>
        <span>by Author</span>
      </button>
      <button mat-menu-item>
        <mat-icon>title</mat-icon>
        <span>by Title</span>
      </button>
      <button mat-menu-item>
        <mat-icon>translate</mat-icon>
        <span>by Language</span>
      </button>
    </mat-menu>
  <a mat-icon-button href="http://github.com/piotrekkmt"><span class="mat-button-wrapper">
<img src="/assets/github.svg"/></span></a>
</mat-toolbar>`
})

export class BookToolbarComponent {}
