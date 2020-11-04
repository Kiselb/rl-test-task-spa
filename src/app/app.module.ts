import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UsersActiveComponent } from './users/users-active/users-active.component';
import { RolesActiveComponent } from './roles/roles-active/roles-active.component';
import { RoleAddNewComponent } from './roles/role-add-new/role-add-new.component';
import { UserAddNewComponent } from './users/user-add-new/user-add-new.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UsersRolesComponent } from './users/users-roles/users-roles.component';
import { LoginComponent } from './users/login/login.component';
import { JwtinterceptorService } from './users/login/jwtinterceptor.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsersActiveComponent,
    RolesActiveComponent,
    RoleAddNewComponent,
    UserAddNewComponent,
    UserEditComponent,
    UsersRolesComponent,
    LoginComponent,
    AboutComponent,
    //BrowserAnimationsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSelectModule,
  ],
  providers: [
    HttpClientModule,
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
