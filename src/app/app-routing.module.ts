import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './shared/components/hero-page/hero-page.component';
import { authGuard, publicGuard } from './shared/guards/auth.guard';
import { CartPageComponent } from './cart/pages/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: HeroPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [publicGuard],
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
    canActivate: [authGuard],
  },

  {
    path: 'cart',
    component: CartPageComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
