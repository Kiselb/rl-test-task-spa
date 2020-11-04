import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RoleAddNewComponent } from './roles/role-add-new/role-add-new.component';
import { RolesActiveComponent } from './roles/roles-active/roles-active.component';
import { LoginComponent } from './users/login/login.component';
import { UserAddNewComponent } from './users/user-add-new/user-add-new.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UsersActiveComponent } from './users/users-active/users-active.component';
import { UsersRolesComponent } from './users/users-roles/users-roles.component';
import { AuthGuard } from './users/login/auth.guard';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard], children: [
    { path: 'users', canActivate: [AuthGuard], children: [
      { path: 'active', canActivate: [AuthGuard], component: UsersActiveComponent },
      { path: 'addnew', canActivate: [AuthGuard], component: UserAddNewComponent },
      { path: ':id', canActivate: [AuthGuard], component: UserEditComponent },
      { path: ':id/roles', canActivate: [AuthGuard], component: UsersRolesComponent },
    ]},
    { path: 'roles', canActivate: [AuthGuard], children: [
      { path: 'active', canActivate: [AuthGuard], component: RolesActiveComponent },
      { path: 'addnew', canActivate: [AuthGuard], component: RoleAddNewComponent }
    ]},
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
