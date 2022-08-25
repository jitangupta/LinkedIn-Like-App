import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'search',
        component: SearchComponent,
        // canActivate: [AuthGuard],
      },
    ],
  },
  // 404
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
