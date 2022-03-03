import { Component, Input, OnInit } from '@angular/core';
import { Genre, Movie } from 'src/models/model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
  @Input() movies!: Movie[] | null;

  @Input() filters!: Genre[] | null;

  ngOnInit(): void {
    this.movies = this.sortByPopularity(this.movies || []);
  }

  private sortByPopularity(movies: Movie[]) {
    return movies.sort((n1, n2) =>
      n1.popularity === n2.popularity
        ? 0
        : n1.popularity > n2.popularity
        ? 1
        : -1
    );
  }
}
