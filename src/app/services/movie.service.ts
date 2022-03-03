import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { MovieInterface } from 'src/models/model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieInterface[]> {
    return this.http
      .get<MovieInterface[]>('../../assets/movies.json')
      .pipe(timeout(13000));
  }
}
