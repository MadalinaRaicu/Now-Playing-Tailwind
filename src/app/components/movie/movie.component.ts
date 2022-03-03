import { Component, Input } from '@angular/core';
import { Genre, Movie } from '../../../models/model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent {
  @Input() movie!: Movie;
  @Input() genres!: Genre[];

  poster(path?: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  genreNames(): string {
    return this.movie.genre_ids
      .map((genreId) => this.genres.find((g) => g.id === genreId)?.name)
      .filter((name) => name)
      .join(', ');
  }
}
