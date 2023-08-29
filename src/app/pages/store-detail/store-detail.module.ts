import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDetailComponent } from './store-detail.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StoreDetailComponent],
  imports: [
    CommonModule,
    TitleComponent,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: StoreDetailComponent }]),
  ],
})
export class StoreDetailModule {}
