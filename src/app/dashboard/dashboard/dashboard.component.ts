import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // FILTER DATA BEGIN
  filterFormArray: any;
  // FILTER DATA END

  // TABLE DATA BEGIN
  tableTranslatorData: any;
  // TABLE DATA END

  // PAGINATION CONFIG BEGIN
  paginationConfig: any;
  // PAGINATION CONFIG END


  constructor() {
    this.filterFormArray = environment.filterFormArray
    this.tableTranslatorData = environment.tableTranslatorData;
    this.paginationConfig = environment.paginationConfig;
  }

  ngOnInit(): void {
  }

  // FILTER DATA EVENT BEGIN
  onSubmit(e) {
    console.log('Filter submit triggred::', e)
  }
  // FILTER DATA EVENT END

  // TABLE DATA EVENT BEGIN
  actionTriggered(e) {
    console.log('Action Triggered::', e);
  }
  // TABLE DATA EVENT END


  // PAGE CHANGE EVENT BEGIN
  pageChangeListener(e) {
    console.log('Page Change Listenere::', e)
  }
  // PAGE CHANGE EVENT END



}
