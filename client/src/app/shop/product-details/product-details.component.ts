import { BasketService } from './../../basket/basket.service';
import { map } from 'rxjs/operators';
import { ShopService } from './../shop.service';
import { IProduct } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:IProduct;
  quantity=1;

  constructor(private shopService:ShopService,
              private activatedRoute:ActivatedRoute,
              private bcService:BreadcrumbService,
              private basketService:BasketService) { 
    this.bcService.set('@productDetails','');
  }

  ngOnInit() {
    this.loadProduct();
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product,this.quantity);
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    if(this.quantity > 1){
    this.quantity--;
    }
  }

  loadProduct(){
    this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
      this.bcService.set('@productDetails',product.name);
    },err=>console.log(err))
  }
 

}
