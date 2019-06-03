import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-stay22',
  templateUrl: './stay22.page.html',
  styleUrls: ['./stay22.page.scss'],
})
export class Stay22Page implements OnInit {

  constructor(public loadingController: LoadingController) 
  {

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait ...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  ngOnInit() {

    this.presentLoading();
  }

}
