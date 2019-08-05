import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'properties', loadChildren: './properties/properties.module#PropertiesPageModule' },
  { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' },
  { path: 'listings', loadChildren: './listings/listings.module#ListingsPageModule' },
  { path: 'listing-details', loadChildren: './listing-details/listing-details.module#ListingDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
