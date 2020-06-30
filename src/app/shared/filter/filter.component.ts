import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  @Input() filterFormArray: any[];
  @Output() onSubmit = new EventEmitter();
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({});
  }


  ngOnInit(): void {
    this.createFormControl();
  }

  createFormControl(): any {
    this.filterFormArray.forEach(d => {
      if (d.option.formControlName)
        this.filterForm.addControl(d.option.formControlName, this.fb.control(d.option.formControlName))
    })
  }

  onFilterSubmit(f) {
    this.onSubmit.emit(f);
  }
}
