import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Genre } from '../../models/model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() genres!: Genre[];
  @Output() filterChanged = new EventEmitter<number[]>();
  @Output() ratingChanged = new EventEmitter<number>();

  form!: FormGroup;

  minRating: number = 3;

  constructor(private formBuilder: FormBuilder) {}

  get genresFormArray() {
    return this.form.controls['genres'] as FormArray;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      genres: new FormArray([]),
    });
    this.addCheckboxes();
  }

  clearFilters() {
    this.form = this.formBuilder.group({
      genres: new FormArray([]),
    });
    this.addCheckboxes();
    this.filterChanged.emit([]);
    this.minRating = 3;
  }

  updateFilters() {
    const selectedGenreIds = this.form.value.genres
      .map((checked: any, i: number) => (checked ? this.genres[i].id : null))
      .filter((v: null) => v !== null);
    this.filterChanged.emit(selectedGenreIds);
  }

  updateRating(rating: string) {
    this.minRating = Number(rating);
    this.ratingChanged.emit(this.minRating);
  }

  private addCheckboxes() {
    this.genres.forEach(() =>
      this.genresFormArray.push(new FormControl(false))
    );
  }
}
