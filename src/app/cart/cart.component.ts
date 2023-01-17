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

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    // this.cartService.clearCartItems();
}

  goToMain() {
    this.router.navigate(['/main']);
  }

  removeItem(item: any) {
    const index = this.cartItems.indexOf(item);
    this.cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }

  clearCart() {
    this.cartItems = this.cartService.clearCartItems();
    
  }

  
}

