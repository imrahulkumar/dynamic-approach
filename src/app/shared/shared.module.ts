import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { TableComponent } from './table/table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { InputFilterComponent } from './input-filter/input-filter.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbModule, NgbDatepickerModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SideFilterComponent } from './side-filter/side-filter.component';

@NgModule({
  declarations:
    [FilterComponent,
      TableComponent,
      PaginationComponent,
      InputFilterComponent,
      SideFilterComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    NgbPaginationModule
    
    
  ],
  exports: [
    FilterComponent,
    TableComponent,
    PaginationComponent,
    InputFilterComponent,
    SideFilterComponent
  ]
})
export class SharedModule { }
