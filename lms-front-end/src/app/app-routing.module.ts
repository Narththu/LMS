import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ReservedBooksComponent } from './reserved-books/reserved-books.component';
import { BorrowedBooksComponent } from './borrowed-books/borrowed-books.component';


const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homeAdmin', component: HomeAdminComponent, canActivate: [AuthGuard] },
  { path: 'homeUser', component: HomeUserComponent, canActivate: [AuthGuard] },
  { path: 'addBook', component: AddBookComponent, canActivate: [AuthGuard] },
  { path: 'reservedBooks', component: ReservedBooksComponent, canActivate: [AuthGuard] },
  { path: 'borrowedBooks', component: BorrowedBooksComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
