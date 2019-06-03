import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild("mySlider") slides: IonSlides;
  constructor(private router:Router) {}

  slidesDidLoad() {
    this.slides.startAutoplay();
  }

  onThumbnailClick(x)
  {

  }

  
  mostViewed()
  {
    this.router.navigate(['most-viewed']);
  }

}
