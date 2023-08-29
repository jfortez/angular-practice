import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { StoreComponent } from './store.component';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from 'src/app/components/title/title.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
  },
  {
    path: ':id',
    // loadComponent: () =>
    //   import('../store-detail/store-detail.component').then(
    //     (m) => m.StoreDetailComponent
    //   ),
    loadChildren: () =>
      import('../store-detail/store-detail.module').then(
        (m) => m.StoreDetailModule
      ),
  },
];
@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TitleComponent,
    HttpClientModule,
    NgOptimizedImage,
  ],
})
export class StoreModule {}
