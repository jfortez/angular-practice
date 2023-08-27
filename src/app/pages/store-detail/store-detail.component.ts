import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from 'src/app/components/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../store/product';

@Component({
  selector: 'app-store-detail',
  standalone: true,
  imports: [CommonModule, TitleComponent, HttpClientModule],
  providers: [ProductsService],
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css'],
})
export class StoreDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.productsService.getProduct({ id: Number(params.get('id')) })
        )
      )
      .subscribe((product) => {
        this.product = product;
      });
  }
}
