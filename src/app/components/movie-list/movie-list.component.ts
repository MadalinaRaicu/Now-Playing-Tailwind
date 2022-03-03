import { Component, Input } from '@angular/core';
import { MovieInterface } from 'src/models/model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  @Input() movies!: MovieInterface[] | null;
}
