import { Component, OnInit, Output, AfterViewInit, EventEmitter, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss']
})
export class SideFilterComponent implements OnInit, AfterViewInit {

  @Output() filterChange = new EventEmitter()

  constructor(private formBuilder: FormBuilder) { }

  ngAfterViewInit(): void {
    // TO LISTEN THE CHANGES BEGIN
    this.filterForm.valueChanges.subscribe(res => {
      this.filterChange.emit(res);
    })
    // TO LISTEN THE CHANGES BEGIN
  }

  filterList: any = [
    {
      name: 'Period',
      type: 'radio', //status
      value: [
        { name: 'Quater', value: 'Quater' },
        { name: 'Monthly', value: 'Monthly' },
        { name: 'Yearly', value: 'Yearly' },
        { name: 'Weekly', value: 'Weekly' },
        { name: 'Custom', value: 'Custom' }
      ]
    },
    {
      name: 'Date Range',
      type: 'date',
      value: [{ name: 'dateTo' }, { name: 'dateFrom' }]
    },
    {
      name: 'Status',
      type: 'checkbox', //status
      value: [
        { name: 'Paid', value: true },
        { name: 'Unpaid', value: true },
        { name: 'Refund', value: true }
      ]
    },
    {
      name: 'In Table data',
      type: 'checkbox', //status
      value: [
        { name: 'Id', value: true },
        { name: 'Event Name', value: true },
        { name: 'Status', value: true },
        { name: 'Total/Gross Sale', value: true },
        { name: 'Discount', value: true },
        { name: 'MEG Free', value: true },
      ]
    },
  ];

  filterForm: FormGroup;

  ngOnInit(): void {

    this.filterForm = this.formBuilder.group({
      period: this.formBuilder.array([this.createItem()])
    });


    //CREATE DYNAMIC FORM BEGIN
    this.createFormControl();
    //CREATE DYNAMIC FORM END


  }

  createItem(): FormGroup {
    let group: any = {};
    this.filterList.forEach((x) => {
      if (x.type == 'radio') {
        group[x.name] = new FormControl('Quater');
      }
    });
    return new FormGroup(group);
  }

  get radioControl() {
    let radioArray = this.filterForm.get('period') as FormArray
    return radioArray.controls
  }
  createFormControl(): any {

    this.filterList.forEach(d => {
      if (d.name == 'Date Range')
        d.value.forEach(d => {
          this.addController(d.name)
        });
      if (d.type == 'checkbox') {
        d.value.forEach(d => {
          this.addController(d.name, d.value)
        });
      }

    })
  }

  addController(name, value = null) {
    let val = value == null ? name : value;
    this.filterForm.addControl(name, this.formBuilder.control(val))
  }




}
