import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IUser, UsersService } from '../users.service';
import { UsersRolesDataSource } from './users-roles.datasource';

@Component({
  selector: 'app-users-roles',
  templateUrl: './users-roles.component.html',
  styleUrls: ['./users-roles.component.css']
})
export class UsersRolesComponent implements OnInit {

  userId: number;
  dataSource: UsersRolesDataSource = null;
  displayedColumns: string[] = ['Id', "Delete", 'Name'];
  selectedValue: number;

  roles = [
    { Id: 1, Name: "Admin"},
    { Id: 1, Name: "AdminL1"},
    { Id: 1, Name: "AdminL2"},
    { Id: 1, Name: "AdminL4"},
  ];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  tryRemoveRole(roleId: number) {
    this.usersService.removeUsersRoles(this.userId, roleId).subscribe(
      response => {
        console.log("OK");
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = +params.get('id');
      console.log(`UserID: ${this.userId}`);
      this.dataSource = new UsersRolesDataSource(this.userId, this.usersService);
      this.dataSource.getUsers();      
    });
  }

}
