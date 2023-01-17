import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add-to-cart-dialog',
  templateUrl: './add-to-cart-dialog.component.html',
  styleUrls: ['./add-to-cart-dialog.component.css']
})
export class AddToCartDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddToCartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public cartService: CartService) { }

  addToCart() {
    this.cartService.addItem(this.data.product);
  }

}

