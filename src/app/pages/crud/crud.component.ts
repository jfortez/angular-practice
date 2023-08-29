import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const products: Product[] = [
  { id: 1, name: 'Hydrogen', price: 9.24, quantity: 10 },
  { id: 2, name: 'Helium', price: 3.4, quantity: 100 },
  { id: 3, name: 'Lithium', price: 2.5, quantity: 523 },
];

class ProductClass {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public quantity: number
  ) {}
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent {
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'actions'];
  dataSource: Product[] = products;
  actionType!: 'create' | 'update' | undefined;
  product = new ProductClass(0, '', 0, 0);

  deleteProduct(product: Product) {
    this.dataSource = this.dataSource.filter((p) => p.id !== product.id);
  }

  handleNew() {
    this.actionType = 'create';
    this.product = new ProductClass(0, '', 0, 0);
  }

  updateProduct(product: Product) {
    this.actionType = 'update';
    this.product = new ProductClass(
      product.id,
      product.name,
      product.price,
      product.quantity
    );
  }

  clear() {
    this.actionType = undefined;
    this.product = new ProductClass(0, '', 0, 0);
  }

  onSubmit() {
    if (this.actionType === 'create') {
      this.dataSource = [...this.dataSource, this.product];
    } else if (this.actionType === 'update') {
      this.dataSource = this.dataSource.map((p) =>
        p.id === this.product.id ? this.product : p
      );
    }
    this.clear();
  }
}
