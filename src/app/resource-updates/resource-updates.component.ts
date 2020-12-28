import {Component, OnInit} from '@angular/core';
import {Column} from '../data-table/data-table.component';

@Component({
  selector: 'app-resource-updates',
  templateUrl: './resource-updates.component.html',
  styleUrls: ['./resource-updates.component.css']
})
export class ResourceUpdatesComponent implements OnInit {

  columns: Column[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Preparing list for columns
    this.columns.push({ fieldName: 'Id', fieldTitle: 'Id', isSortable: false, width: '5%' });
    this.columns.push({ fieldName: 'Title', fieldTitle: 'Title', width: '60%' });
    this.columns.push({ fieldName: 'Type', fieldTitle: 'Type', width: '35%' });

    // Preparing list for rows
    this.rows = [
      {id: 5, title: 'Air Gas Guideline', type: 'PPT'},
      {id: 6, title: 'Air Pollution User Reference', type: 'Website'},
      {id: 18, title: 'Avian Influenza (H7N9) User Reference', type: 'Website'},
      {id: 12, title: 'Avian Influenza (H7N9) for high risk', type: 'PPT'},
      {id: 11, title: 'Avian Influenza (H7N9) for normal', type: 'PPT'}
    ];
  }
}
