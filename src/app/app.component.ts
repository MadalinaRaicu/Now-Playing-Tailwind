import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre, Movie } from './models/model';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend-developer-task-framework-agnostic';

  movies$!: Observable<Movie[]>;

  filters$!: Observable<Genre[]>;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
    this.filters$ = this.movieService.getGenres();
  }
}
