import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { switchMap, tap } from 'rxjs';
import { ProductToOrder } from '../../interfaces/productToOrder.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  public product!: Product;
  public productService = inject(ProductsService);
  public quantity: number = 1;
  public auth = inject(AuthService);

  constructor(private route: ActivatedRoute) {
    this.route.params
      .pipe(switchMap(({ id }) => this.productService.getProduct(id)))
      .subscribe((product) => (this.product = product));
  }

  increase() {
    this.quantity <= 5 && this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  isProductInCart(cart: ProductToOrder[]): boolean {
    return cart.some((product) => product.id === this.product.id);
  }

  addToCart() {
    const productToOrder: ProductToOrder = {
      id: this.product.id,
      name: this.product.name,
      quantity: this.quantity,
      price: this.product.price,
      total: this.quantity * this.product.price,
    };

    const cart: ProductToOrder[] = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );

    if (this.isProductInCart(cart)) {
      const productIndex = cart.findIndex(
        (product) => product.id === this.product.id
      );
      cart[productIndex].quantity += this.quantity;
      cart[productIndex].total += this.quantity * this.product.price;
    } else {
      cart.push(productToOrder);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
