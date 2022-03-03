import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { Genre, Movie } from 'src/models/model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>('../../assets/movies.json')
      .pipe(timeout(13000));
  }

  getGenres(): Observable<Genre[]> {
    return this.http
      .get<Genre[]>('../../assets/genres.json')
      .pipe(timeout(13000));
  }
}
