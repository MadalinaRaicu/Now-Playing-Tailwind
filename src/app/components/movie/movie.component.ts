import { Component, Input } from '@angular/core';
import { MovieInterface } from 'src/models/model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent {
  @Input() movie!: MovieInterface;

  poster(path?: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
