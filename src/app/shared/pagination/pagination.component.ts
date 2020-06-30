import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
 @Output() pageChangeListener = new EventEmitter()
 @Input() options:any
  constructor() { }

  ngOnInit(): void {
  }
  pageChange(e){
   this.pageChangeListener.emit(e);
  }
}
