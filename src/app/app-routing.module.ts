import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './pages/store/store.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { StoreDetailComponent } from './pages/store-detail/store-detail.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'store/:id',
    component: StoreDetailComponent,
  },
  {
    path: 'samples',
    component: SamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
