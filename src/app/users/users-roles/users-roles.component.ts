import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RolesService } from 'src/app/roles/roles.service';
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
  selectedRole: number;

  roles = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private rolesService: RolesService
  ) { }

  rolesRequery() {
    this.dataSource = new UsersRolesDataSource(this.userId, this.usersService);
    this.dataSource.getUsersRoles();      
}
  tryAddRole() {
    console.log(`UserId: ${this.userId} RoleId: ${this.selectedRole}`);
    this.usersService.addUsersRoles(this.userId, this.selectedRole).subscribe(
      response => {
        console.log("OK");
        this.rolesRequery();
      },
      error => {
        console.log(error);
      }
    );
  }

  tryRemoveRole(roleId: number) {
    this.usersService.removeUsersRoles(this.userId, roleId).subscribe(
      response => {
        console.log("OK");
        this.rolesRequery();
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
      this.dataSource.getUsersRoles();      
    });
    this.rolesService.getRoles().subscribe(
      response => {
        console.log(response);
        this.roles = response.sort((roleA, roleB) => {
          if (roleA["name"] > roleB["name"])
            return 1;
          if (roleA["name"] < roleB["name"])
            return -1;
          return 0;
        });
      },
      error => {
        console.log(error);
      }
    );
  }

}
