import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Setting',
      url: '/setting',
      icon: 'settings'
    },
    {
      title: 'Share / Invite',
      url: '/share',
      icon: 'share'
    },
    {
      title: 'Support & Feedback',
      url: '/support',
      icon: 'chatboxes'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private emailComposer: EmailComposer,
    private callNumber: CallNumber
  ) {
    this.initializeApp();
  }

  sendEmail()
  {
    let email = {
      to: 'azeem.jagirdar@live.com',
     
      subject: 'Product Enquiry',
  }

    this.emailComposer.open(email);
  }

  callaNumber()
  {
    this.callNumber.callNumber("918880161987", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
