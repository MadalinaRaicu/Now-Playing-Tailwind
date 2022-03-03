import { Component, Input } from '@angular/core';
import { Movie } from 'src/models/model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent {
  @Input() movie!: Movie;

  poster(path?: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
