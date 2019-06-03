import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagePreloader } from './img-preload.directive';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { DatePickerModule } from 'ionic4-date-picker';
import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent,ImagePreloader],
  entryComponents: [],
  imports: [BrowserModule,DatePickerModule, IonicModule.forRoot(),AppRoutingModule,HttpClientModule, NgCircleProgressModule.forRoot({
    // set defaults here
    radius: 100,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: "#78C000",
    innerStrokeColor: "#C7E596",
    animationDuration: 300,
  })],
  providers: [
    StatusBar,
    DataService,
    SplashScreen,
    EmailComposer,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
