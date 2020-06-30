import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss']
})
export class InputFilterComponent implements OnInit {
  @Input() controls: FormGroup;
  @Input() inputType: any;
  @Input() option: any;

  constructor() { }

  ngOnInit(): void {}
}
