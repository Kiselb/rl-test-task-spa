import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RoleAddNewComponent } from './roles/role-add-new/role-add-new.component';
import { RolesActiveComponent } from './roles/roles-active/roles-active.component';
import { UserAddNewComponent } from './users/user-add-new/user-add-new.component';
import { UsersActiveComponent } from './users/users-active/users-active.component';


const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'users', children: [
      { path: 'active', component: UsersActiveComponent },
      { path: 'addnew', component: UserAddNewComponent }
    ]},
    { path: 'roles', children: [
      { path: 'active', component: RolesActiveComponent },
      { path: 'addnew', component: RoleAddNewComponent }
    ]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
