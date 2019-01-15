import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  states = {
      on: 'fa fa-star',
      off: 'fa fa-star-o'
  };
  icon = this.states.off;
  constructor() { }

  ngOnInit() {
  }

  onFavClick() {
      this.isFavorite = !this.isFavorite;
      this.icon = this.isFavorite ? this.states.on : this.states.off;
  }
}
