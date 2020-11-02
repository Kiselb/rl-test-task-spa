import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RolesService } from '../roles.service';
import { RolesDataSource } from './roles.datasource';

@Component({
  selector: 'app-roles-active',
  templateUrl: './roles-active.component.html',
  styleUrls: ['./roles-active.component.css']
})
export class RolesActiveComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('input', { static: true }) input: ElementRef;
  @ViewChild('button', { static: true }) button: ElementRef;

  displayedColumns: string[] = ['Id', 'Name'];
  dataSource: RolesDataSource;

  constructor(
    private rolesService: RolesService
  ) { }

  ngOnInit() {
    this.dataSource = new RolesDataSource(this.rolesService);
    this.dataSource.getRoles();
  }

}
