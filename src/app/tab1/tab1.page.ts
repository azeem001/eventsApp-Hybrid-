import { Component, OnInit,ViewChild,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { IonSlides } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  
})
export class Tab1Page implements OnInit {
  @ViewChild("mySlider") slides: IonSlides;

   dateone:any = new Date("2016-08-21T07:00:00.000Z"); 
   datetwo:any = new Date("2016-08-28T07:00:00.000Z");
  data={"loadMainAndSub":"true"};
 
  colorPalettes=["linear-gradient(to right bottom, #0089ba, #5e87d0, #a37fd0, #dc73ba, #ff6f91);","linear-gradient(to right bottom, #008f7a, #44ac7c, #7ac878, #b6e272, #f9f871);","linear-gradient(to right bottom, #ff6f91, #ff8a7a, #ffad67, #ffd360, #f9f871);","linear-gradient(to right, #de273c, #e04c50, #e16765, #e07f7a, #dd9590);","linear-gradient(to right, #c4286c, #cd4a70, #d46577, #d97e81, #dd9590);","linear-gradient(to right, #2f4858, #545b78, #856c8d, #b67d94, #dd9590);"];
  cardColor:any;

  category1:any ={};
  category2:any ={};
  category3:any ={};
  category4:any ={};

  products1=[];
  products2=[];
  products3=[];
  products4=[];

  cat1=1;
  cat2=13;
  cat3=26;
  cat4=32;
  constructor(private router:Router,private dataService : DataService,private cdr: ChangeDetectorRef,private sanitizer:DomSanitizer,private statusBar: StatusBar) 
  {
    
  }

  dynamicPalettes()
  {
    
      var index = Math.floor(Math.random() * this.colorPalettes.length);
      this.cardColor = this.colorPalettes[index];

      var styles = {
        "background-image": this.cardColor
      };
     
      return styles;
    
  }

  mostViewed(id)
  {
    this.router.navigate(['list-products/'+id]);
  }

  onProductClick(p)
  {
    this.router.navigate(['product-details/'+p.categoryId+'/'+p.productId]);
  }

  slidesDidLoad() {
    this.slides.startAutoplay();
  }

  ngOnInit() {

   

// set status bar to white
    this.statusBar.backgroundColorByHexString('#C82769');

    var dayDif = (this.datetwo - this.dateone)  / 1000 / 60 / 60 / 24;
    console.log(dayDif);
    this.dataService.loadCategory(this.data).subscribe((result)=>{ 
      
      this.category1 = result.data[0];
      this.category2 = result.data[7];
      this.category3 = result.data[18];
      this.category4 = result.data[23];
      
      

    
    });

    this.dataService.loadProduct(this.cat1).subscribe((result)=>{

      this.products1 = result.data;
      for (var i=0;i<this.products1.length;i++)
      {
       
        var res = this.dynamicPalettes(); 
       this.products1[i].background=this.sanitizer.bypassSecurityTrustStyle('background-image:' + res["background-image"])  ;
     
      }
      
    });

    this.dataService.loadProduct(this.cat2).subscribe((result)=>{

    this.products2 = result.data;
    for (var i=0;i<this.products2.length;i++)
      {
       
        var res = this.dynamicPalettes(); 
       this.products2[i].background=this.sanitizer.bypassSecurityTrustStyle('background-image:' + res["background-image"])  ;
     
      }
    });

    this.dataService.loadProduct(this.cat3).subscribe((result)=>{

      this.products3 = result.data;
      for (var i=0;i<this.products3.length;i++)
      {
       
        var res = this.dynamicPalettes(); 
       this.products3[i].background=this.sanitizer.bypassSecurityTrustStyle('background-image:' + res["background-image"])  ;
     
      }
    });

    this.dataService.loadProduct(this.cat4).subscribe((result)=>{

      this.products4 = result.data;
      for (var i=0;i<this.products4.length;i++)
      {
       
        var res = this.dynamicPalettes(); 
       this.products4[i].background=this.sanitizer.bypassSecurityTrustStyle('background-image:' + res["background-image"])  ;
        
      }

  });


}

}
