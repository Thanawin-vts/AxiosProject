import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  items: any[] = [];
  headers: any[] = [];

  ngOnInit() {
    this.items = [
      { name: 'Item 1', category: 'A', price: 10.99 },
      { name: 'Item 2', category: 'B', price: 20.49 },
      { name: 'Item 3', category: 'A', price: 15.00 },
    ];
    this.headers = [
      { name: 'Head 1'},
      { name: 'Head 2'},
      { name: 'Head 3'},
      { name: 'Head 4'},
      { name: 'Head 5'},
      { name: 'Head 6'},
      { name: 'Head 7'},
      { name: 'Head 8'},
      { name: 'Head 9'},
    ];
  }

  setTableHeader(inputHeader: string[]) {
    this.headers = inputHeader
  }

  setTableData(inputData: any[]) {
    this.items = inputData
  }

  
}
