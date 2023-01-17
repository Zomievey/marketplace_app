import { Component, Input } from '@angular/core';
import { productsJSON } from '../../products';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartDialogComponent } from '../add-to-cart-dialog/add-to-cart-dialog.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input()
  products: any = productsJSON.products;
  categories: any = ["1", "2"]
  sortBy: string = 'price';
  selectedCategory: string[] = [];
  filteredProducts: any;

  constructor(public dialog: MatDialog) {
    this.categories = [...new Set(this.products.map((product: { category: any; }) => product.category))];
    this.filteredProducts = this.products;
  }



  selectedCategories: string[] = [];
  filterByCategory() {
    if (this.selectedCategories.length === 0) {
      // Show all products if no category is selected
      this.filteredProducts = this.products;
    } else {
      // Filter the products by the selected categories
      this.filteredProducts = this.products.filter((product: { category: string; }) => {
        for (let i = 0; i < this.selectedCategories.length; i++) {
          if (product.category === this.selectedCategories[i]) {
            return true;
          }
        }
        return false;
      });
    }
    this.sortItems();
  }

  sortItems() {
    console.log("Sorting by: " + this.sortBy);
    if (this.sortBy === 'price') {
      this.filteredProducts.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
    } else if (this.sortBy === 'name') {
      this.filteredProducts.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
    }
  }

 openAddToCartDialog(product: any) {
    const dialogRef = this.dialog.open(AddToCartDialogComponent, {
      data: { product: product }

    }); console.log("added to cart");
  }
  
}