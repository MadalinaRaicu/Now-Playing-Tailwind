import { Component, Input, OnInit } from '@angular/core';
import { Genre, Movie } from 'src/models/model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
  @Input() movies!: Movie[] | null;

  @Input() filters!: Genre[] | null;

  filteredMovies: Movie[] = [];

  ngOnInit(): void {
    this.filteredMovies = this.sortByPopularity(this.movies || []);
  }

  get selectedMovies() {
    return this.filteredMovies?.length;
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

  onFiltersChanged(selectedGenreIds: number[]): void {
    if (selectedGenreIds.length === 0) {
      this.filteredMovies = this.movies || [];
    } else {
      this.filteredMovies = (this.movies || []).filter((movie) =>
        movie.genre_ids.find((id) => selectedGenreIds.includes(id))
      );
    }
  }
}
