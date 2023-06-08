import { Component } from '@angular/core';
import { Route } from '../../interfaces/route.interface';

@Component({
  selector: 'app-nabar',
  templateUrl: './nabar.component.html',
  styleUrls: ['./nabar.component.css'],
})
export class NabarComponent {
  public routes: Route[] = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/products/view',
      label: 'Products',
    },
    {
      path: '/cart',
      label: 'Cart',
    },
  ];
}
