import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { IUser, UsersService } from '../users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userId: number;
  fgParams: FormGroup = null;
  IsWait: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  trySave() {
    if (this.fgParams.valid) {
      this.IsWait = true;
      const user: IUser = {
        "Id": this.userId,
        "Login": this.fgParams.controls["ctrlLogin"].value,
        "Name": this.fgParams.controls["ctrlName"].value,
        "Email": this.fgParams.controls["ctrlEmail"].value,
      }
      this.usersService.update(user).subscribe(
        response => {
          this.IsWait = false;
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
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = +params.get('id');
      console.log(`UserID: ${this.userId}`);
      this.usersService.get(this.userId).subscribe(
        response => {
          console.log(response);
          this.fgParams.controls["ctrlLogin"].setValue(response["login"]);
          this.fgParams.controls["ctrlName"].setValue(response["name"]);
          this.fgParams.controls["ctrlEmail"].setValue(response["email"]);
        },
        error => {
          // TODO: navigate to error page
          console.log(error);
        }
      );
    });
    this.fgParams = new FormGroup({
      ctrlLogin: new FormControl(null, Validators.required),
      ctrlName: new FormControl(null, Validators.required),
      ctrlEmail: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

}
