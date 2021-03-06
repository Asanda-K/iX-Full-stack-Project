import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'home',
          children: [
            {
              path: '',
              loadChildren: '../home/home.module#HomePageModule'
            }
          ]
        },
        {
          path: 'inbox',
          children: [
            {
              path: '',
              loadChildren: '../inbox/inbox.module#InboxPageModule'
            }
          ]
        },
        {
          path: 'profile',
          children: [
            {
              path: '',
              loadChildren: '../profile/profile.module#ProfilePageModule'
            }
          ]
        },
        {
            path: 'explore',
            children: [
              {
                path: '',
                loadChildren: './pages/properties/properties.module#PropertiesPageModule'
              }
            ]
          },
          {
            path: 'trips',
            children: [
              {
                path: '',
                loadChildren: './pages/trips/trips.module#TripsPageModule'
              }
            ]
          },
        {
          path: '',
          redirectTo: '/tabs/home',
          pathMatch: 'full'
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/home' ,
      pathMatch: 'full'
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TabsPageRoutingModule {}

