import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TitleComponent } from 'src/app/components/title/title.component';
import { Product } from './product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store',
  standalone: true,
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [ProductsService],
  imports: [
    TitleComponent,
    HttpClientModule,
    CommonModule,
    NgOptimizedImage,
    RouterModule,
  ],
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
