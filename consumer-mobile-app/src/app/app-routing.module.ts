import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'property-details', loadChildren: './pages/property-details/property-details.module#PropertyDetailsPageModule' },


  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  // { path: 'properties', loadChildren: './pages/properties/properties.module#PropertiesPageModule' },
  // { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  // { path: 'trips', loadChildren: './pages/trips/trips.module#TripsPageModule' },
  // { path: 'inbox', loadChildren: './pages/inbox/inbox.module#InboxPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
