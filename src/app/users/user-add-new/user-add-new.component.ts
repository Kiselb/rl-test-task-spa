import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { IUser, UsersService } from '../users.service';

@Component({
  selector: 'app-user-add-new',
  templateUrl: './user-add-new.component.html',
  styleUrls: ['./user-add-new.component.css']
})
export class UserAddNewComponent implements OnInit {

  fgParams: FormGroup = null;
  IsWait: boolean = false;

  constructor(
    private usersService: UsersService
  ) { }

  trySave() {
    if (this.fgParams.valid) {
      this.IsWait = true;
      const user: IUser = {
        Id: 0,
        Login: this.fgParams.controls["ctrlLogin"].value,
        Name: this.fgParams.controls["ctrlName"].value,
        Email: this.fgParams.controls["ctrlEmail"].value,
        Password: this.fgParams.controls["ctrlPassword"].value,
      }
      this.usersService.addNew(user).subscribe(
        response => {
          this.IsWait = false;
          this.fgParams.reset();
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
    this.fgParams = new FormGroup({
      ctrlLogin: new FormControl(null, Validators.required),
      ctrlName: new FormControl(null, Validators.required),
      ctrlEmail: new FormControl(null, [Validators.required, Validators.email]),
      ctrlPassword: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

}
