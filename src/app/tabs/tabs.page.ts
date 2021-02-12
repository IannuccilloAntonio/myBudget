import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  sisalImage = 'assets/icon_home/sisal.jpg';
  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  goBack() {
    this.navCtrl.pop();
  }
}
