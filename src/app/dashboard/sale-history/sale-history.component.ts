import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sale-history',
  templateUrl: './sale-history.component.html',
  styleUrls: ['./sale-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaleHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filterChange(e){
  console.log(e)
  }
}
