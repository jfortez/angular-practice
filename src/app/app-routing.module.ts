import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './pages/store/store.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { StoreDetailComponent } from './pages/store-detail/store-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'samples',
        // component: SamplesComponent,
        loadComponent: () =>
          import('./pages/samples/samples.component').then(
            (m) => m.SamplesComponent
          ),
      },
      {
        path: 'store',
        // component: StoreComponent,
        loadChildren: () =>
          import('./pages/store/store.module').then((m) => m.StoreModule),
      },
      // {
      //   path: 'store/:id',
      //   component: StoreDetailComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
