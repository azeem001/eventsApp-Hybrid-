import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  categoryId: number;
  productId: number;
  private sub: any;
  product1=[];
  product:any={};
  additionalDetails:any={"details" : ""};
  products=[];
  loaded:boolean;

  constructor(private router:Router,private dataService : DataService,private route :ActivatedRoute,public loadingController: LoadingController) { }

  goToStay22Map()
  {
    this.router.navigate(['stay22']);
  }

  doSomething()
  { 
    
    this.loaded=true;
    console.log(this.loaded);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait ...',
      duration: 2000,
      translucent: false,
      cssClass: 'loading'
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  ngOnInit() {

    
    // this.presentLoading();

    this.sub = this.route.params.subscribe(params => {
      this.categoryId = params.categoryId; // (+) converts string 'id' to a number
      this.productId =  params.productId; // (+) converts string 'id' to a number
   });

   this.dataService.loadSingleProduct(this.categoryId,this.productId).subscribe((result)=>{ 
      
   this.product = result.data;

   this.additionalDetails = JSON.parse(this.product.additionalDetails);

   console.log(this.additionalDetails);
   console.log(this.product);
  
  });

  

  }

}
