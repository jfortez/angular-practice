import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [ProductsService],
})
export class StoreComponent implements OnInit {
  products!: Product[];
  private productsService: ProductsService;

  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
