import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Genre } from 'src/models/model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() genres!: Genre[];
  @Output() filterChanged = new EventEmitter<number[]>();

  form: FormGroup;

  get genresFormArray() {
    return this.form.controls['genres'] as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      genres: new FormArray([]),
    });
  }

  ngOnInit(): void {
    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.genres.forEach(() =>
      this.genresFormArray.push(new FormControl(false))
    );
  }

  submit() {
    const selectedGenreIds = this.form.value.genres
      .map((checked: any, i: number) => (checked ? this.genres[i].id : null))
      .filter((v: null) => v !== null);
    this.filterChanged.emit(selectedGenreIds);
  }
}
