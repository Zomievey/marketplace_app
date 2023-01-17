import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  cartItems;

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems = this.cartService.getCartItems();
  }

  goToMain() {
    this.router.navigate(['/main']);
  }
}

