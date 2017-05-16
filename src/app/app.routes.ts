import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { HomeComponent }               from './home/home.component';
import { LoginComponent }              from './login/login.component';
import { AboutComponent }              from './about/about.component';
import { SelectorComponent }           from './selector/selector.component';


const appRoutes: Routes = [
  { path: '', component: SelectorComponent },
  { path: 'albert', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
