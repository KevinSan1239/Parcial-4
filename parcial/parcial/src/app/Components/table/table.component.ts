import { AfterViewInit, Component, Input, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TableDataSource, TableItem } from './table-datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit,OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  @Input()displayedColumns: any=[];
  @Input()dataSource:any;



  constructor() {
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.dataSource=new MatTableDataSource(this.dataSource)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
  }, 400);
  
}



  ngAfterViewInit(): void {}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


