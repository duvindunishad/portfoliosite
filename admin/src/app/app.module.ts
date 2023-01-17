import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';

import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { Category } from 'products/src';

const UX_MODULE = [
  CardModule,
  ToolbarModule,
  ButtonModule,
  TableModule,
]

const Routes: Routes = [
  { 
  path: '', 
  component: ShellComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'categories',
      component: CategoriesListComponent
    }
  ]
 }
];
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, ShellComponent, SidebarComponent, CategoriesListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes, { initialNavigation: 'enabledBlocking' }),UX_MODULE,
  ],
  providers: [Category],
  bootstrap: [AppComponent],
})
export class AppModule {}
