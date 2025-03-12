import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [] ,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];
  isLoading: boolean = true; 

  constructor( private productService: ProductService) {}

  ngOninit() {
    this.productService.getProducts().subscribe({
      next: ( data ) => {
        console.log( data );
        this.products = data.data ?? [];
        console.log( 'products obtained sucessfully' );
        
      },
      error: ( err ) => {
        console.error( err );
          this.isLoading = false;
      },
      complete: () => {
        console.log( 'Productos cargados' );
      
        this.isLoading = false;
      }
    });
  }
}
