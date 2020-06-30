import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }
   
  @Input() colHeading:any[];
  @Input() tableData:any[];
  @Input() option:any[];
  @Output() actionTriggered = new EventEmitter()

  ngOnInit(): void {
  }
  actionListener(config,rowData){
    this.actionTriggered.emit({config,rowData})
  }
}
