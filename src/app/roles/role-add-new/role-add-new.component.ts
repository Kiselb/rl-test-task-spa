import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IRole, RolesService } from '../roles.service';

@Component({
  selector: 'app-role-add-new',
  templateUrl: './role-add-new.component.html',
  styleUrls: ['./role-add-new.component.css']
})
export class RoleAddNewComponent implements OnInit {

  name = new FormControl('');
  IsWait: boolean = false;

  constructor(
    private rolesService: RolesService
  ) { }

  trySave() {
    if (this.name.value) {
      this.IsWait = true;
      const role: IRole = {
        Id: 0,
        Name: this.name.value
      }
      this.rolesService.addNew(role).subscribe(
        response => {
          this.IsWait = false;
          this.name.setValue("");
        },
        error => {
          this.IsWait = false;
          // TODO: navigate to error page
          console.log(error);
        }
      )
    }
  }

  ngOnInit() {
  }

}
