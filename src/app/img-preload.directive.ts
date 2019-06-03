// An image directive based on http://blog.teamtreehouse.com/learn-asynchronous-image-loading-javascript
import {Directive, Input, OnInit} from '@angular/core';

// Define the Directive meta data
@Directive({
  selector: '[img-preload]', //E.g <img mg-img-preloader="http://some_remote_image_url"
  host: {
    '[attr.src]': 'finalImage'    //the attribute of the host element we want to update. in this case, <img 'src' />
  }
})

//Class must implement OnInit for @Input()
export class ImagePreloader {
  
  constructor() {
    console.log('Hello ImgPreload Directive');
  }

}