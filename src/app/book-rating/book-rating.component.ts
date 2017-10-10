import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  template: `
    <span *ngIf="noRating">No rating</span>
    <span *ngIf="!noRating" class="rating-stars">
      <mat-icon class="book-rating" *ngFor="let i of Arr(stars).fill(1)">star</mat-icon>
      <mat-icon class="book-rating" *ngIf="halfStar">star_half</mat-icon>
      <mat-icon class="book-rating" *ngFor="let j of Arr(starsEmpty).fill(1)">star_border</mat-icon>
    </span>
    `
})
export class BookRatingComponent implements OnInit {

  Arr = Array;
  stars = 0;
  halfStar = 0;
  starsEmpty = 0;
  noRating = false;

  @Input()
  rating: any = 0;

  ngOnInit() {
    if (this.rating !== 'No rating') {
      this.stars = parseInt(this.rating, 10);
      this.halfStar = (this.rating - this.stars === 0.5) ? 1 : 0;
      this.starsEmpty = Math.floor(5 - this.rating);
    } else {
      this.noRating = true;
    }
  }

}
