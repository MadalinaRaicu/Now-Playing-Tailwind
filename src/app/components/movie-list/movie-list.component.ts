import { Component, Input, OnInit } from '@angular/core';
import { MovieInterface } from 'src/models/model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
  @Input() movies!: MovieInterface[] | null;

  ngOnInit(): void {
    this.movies =
      this.movies?.sort((n1, n2) => (n1.popularity = n2.popularity)) || null;
  }
}
