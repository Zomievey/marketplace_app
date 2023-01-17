import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  private cartItems: any[] = [];

  addItem(product: any) {
    this.cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }


  getCartItems() {
    const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
    this.cartItems = cartItemsFromLocalStorage ? JSON.parse(cartItemsFromLocalStorage) : [];
    return this.cartItems;
  }


  clearCartItems() {
    localStorage.removeItem("cartItems");
    return this.cartItems = []
  }


}