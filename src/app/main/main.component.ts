import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productsJSON } from '../../products';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  products: any = productsJSON.products;
  filteredProducts = this.products;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.filteredProducts = this.products;
  }


  goToCart() {
    this.router.navigate(['/cart']);
  }
}

