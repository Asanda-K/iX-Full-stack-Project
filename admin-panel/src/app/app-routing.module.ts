import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { ListingsComponent } from './components/listings/listings.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'dash-board', component: DashBoardComponent },
  { path: 'service-providers', component: ServiceProviderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
