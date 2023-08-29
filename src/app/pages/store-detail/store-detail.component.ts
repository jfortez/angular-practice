import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../store/product';

@Component({
  selector: 'app-store-detail',
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
