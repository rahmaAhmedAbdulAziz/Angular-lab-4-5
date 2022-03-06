import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {
  @Input() salles:salles ={
    id: 0,
    title: '',
    price: 0,
    description: '' ,
    category: '',
    image: '' ,
    rating: {
      rate: 0,
      count: 0
    }
  
  };
  constructor() { }

  ngOnInit(): void {
  }
  navigateToProductDetails() {
    this.router.navigate(['/product-details' , this.salles.id])
    console.log("hello")
  }
}


