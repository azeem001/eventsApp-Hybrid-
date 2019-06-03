import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.page.html',
  styleUrls: ['./list-products.page.scss'],
})
export class ListProductsPage implements OnInit {

  
  id: number;
  private sub: any;
  products=[];
  wait=1;

  constructor(private router:Router,private route :ActivatedRoute,private dataService : DataService) { }

  goBack()
  {
    this.router.navigate(['home']);
  }

  onProductClick(p)
  {
    this.router.navigate(['product-details/'+p.categoryId+'/'+p.productId]);
  }

  ngOnInit() {

    
    setInterval(()=>{
      this.wait=0;
    },3000,[]);
   

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });

   this.dataService.loadProduct(this.id).subscribe((result)=>{

    this.products = result.data;
  });

  }

}
