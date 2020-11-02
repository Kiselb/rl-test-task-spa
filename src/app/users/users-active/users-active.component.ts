import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsersService } from '../users.service';
import { UsersDataSource } from './users.datasource';

@Component({
  selector: 'app-users-active',
  templateUrl: './users-active.component.html',
  styleUrls: ['./users-active.component.css']
})
export class UsersActiveComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('input', { static: true }) input: ElementRef;
  @ViewChild('button', { static: true }) button: ElementRef;

  displayedColumns: string[] = ['Id', 'Login', 'Name', 'Email'];
  dataSource: UsersDataSource;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.dataSource = new UsersDataSource(this.usersService);
    this.dataSource.getUsers();
  }

}
