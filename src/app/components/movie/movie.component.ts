import { Component, Input, OnInit } from '@angular/core';
import { MovieInterface } from 'src/models/model';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  @Input() movie!: MovieInterface;

  poster(path?: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
