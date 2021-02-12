import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.page.html',
  styleUrls: ['./detail-page.page.scss'],
})
export class DetailPagePage implements OnInit {

  sisalImage = 'assets/icon_home/sisal.jpg';
  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  name = "Sisal";
  logo = " ";
  ngOnInit() {
    this.route.params.subscribe(
      (param) => {
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.logo = this.router.getCurrentNavigation().extras.state.logo;
      })
  }
  goBack() {
    this.navCtrl.pop();
  }

}
