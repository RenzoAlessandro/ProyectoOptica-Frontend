import { Component, OnInit } from '@angular/core';
import { NgxStarRatingModule } from 'ngx-star-rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  rate = 3;
  horiRate = 7;
  vertRate = 1;
  squareRate = 3;
  movieRate = 2;
  customRate = 2;
  starRate = 4;
  bootRate = 1;
  faRate = 1;
  cssRate = 1;
  faoRate = 5.6;
  faoRated = false;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Rating', active: true }];
  }

  onFaoRate(e) {
    this.faoRated = true;
    this.faoRate = e;
  }

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }

}
