import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductToOrder } from 'src/app/products/interfaces/productToOrder.interface';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  public pathToProducts = '/products/iew';
  public products!: ProductToOrder[];
  public total = 0;
  public productService = inject(ProductsService);

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  goBack() {
    this.router.navigate(['/products/view']);
  }

  confirmOrder() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    this.products.forEach((product) => {
      this.total += product.price * product.quantity;
    });

    const payload = {
      user: {
        id: user.user.id,
      },
      total: this.total,
    };
    this.productService.order(payload).subscribe((response: any) => {
      console.log('observer 1', response);
      this.products.forEach((product) => {
        const payload = {
          order: {
            id: response.id,
          },
          product: {
            id: product.id,
          },
          quantity: product.quantity,
        };
        this.productService.orderDetails(payload).subscribe((data) => {
          console.log(data);
          localStorage.removeItem('cart');
          this.router.navigate(['/products/view']);
        });
      });
    });
  }
}
