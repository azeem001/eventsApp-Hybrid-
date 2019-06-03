import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer, from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showSplash = false; // <-- show animation
  constructor(private router:Router) { }

  doLogin()
  {
    this.router.navigate(['/home']);
  }

  ngOnInit() {

    // setTimeout( () => { this.showSplash=false; console.log(this.showSplash);},5000)
  }

}
