import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListsComponent } from './users/users-lists/users-lists.component';
import { MainLayoutComponent } from './structure/main-layout/main-layout.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';

const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: UsersListsComponent },
    ]
  },
  {
    path: 'users/lists',
    component: MainLayoutComponent,
    children: [
      { path: '', component: UsersListsComponent },
    ]
  },
  {
    path: 'users/create',
    component: MainLayoutComponent,
    children: [
      { path: '', component: AddUserComponent },
    ]
  },
  {
    path: 'users/update/:id',
    component: MainLayoutComponent,
    children: [
      { path: '', component: UpdateUserComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
