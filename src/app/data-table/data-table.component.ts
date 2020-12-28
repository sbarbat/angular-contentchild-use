import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

export interface Column {
  fieldName: string;
  fieldTitle: string;
  isSortable?: boolean;
  width?: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() columns: Column[] = [];

  @ContentChild('rowTemplate') rowTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }
}
