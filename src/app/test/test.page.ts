import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  displayCalendar=0;
  currentTab;

  available= {"background":"","color":""};
  all = {"background":"","color":""};

  constructor(public actionSheetController: ActionSheetController) { }

  tabChanged(data)
  {
    if(data.detail.value=='location')
    {
      this.currentTab="location";
    }
    else
    {
      this.currentTab="invites";
    }
  }

  availableTab()
  {
    this.available.background="#4A8CFF";
    this.available.color="white";
    this.all.background="white";
    this.all.color="black";
  }
  
  allTab()
  {
    this.available.background="white";
    this.available.color="black";
    this.all.background="#4A8CFF";
    this.all.color="white";
  }

  ngOnInit() {
   
    this.available.background="#4A8CFF";
    this.available.color="white";

  }

}
