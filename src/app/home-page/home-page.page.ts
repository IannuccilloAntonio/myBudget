import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {



  today: string;

  // mi importo le immagini per i  vari bottoni
  goldbImage = 'assets/icon_home/goldbet.png';
  eurobetImage = 'assets/icon_home/eurobet.png';
  snaiImage = 'assets/icon_home/snaiapp.jpg ';
  sisalImage = 'assets/icon_home/sisal.jpg';
  modWorkIMG = 'assets/icon_home/dumbbell.png';
  modAnswer = 'assets/icon_home/question--v1.png';

  profilePic: 'assets/icon/profile_pic.png';

  constructor(
    private router: Router,
    private storage: Storage,
    private route: ActivatedRoute,
    //private loadingSpinner: LoadingSpinnerComponent,
  ) { }

  teachingID = ''
  professorID = 0
  teachingName = ''
  isReport = false

  ngOnInit() {
    //this.getUser()
    this.carica()

    this.today = new Date().toLocaleString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  carica() {
    if (this.isReport) {
      this.router.navigate(['./profile-student']);
    }
  }

  /*getUser() {
    const spinner = this.loadingSpinner.presentLoading()

    this.storage.get('profile').then(
      profile => {
        spinner.then(
          loadingSpinner => loadingSpinner.dismiss()
        )

        this.student.result = profile
      }
    )
  }*/


  sisal() {
    const name = 'Sisal'
    const navigationExtras: NavigationExtras = {
      state: {
        name,
        logo: this.sisalImage
      }
    }
    this.router.navigate(['./detail-page'], navigationExtras);
  }

  eurobet() {
    const name = 'Eurobet'
    const navigationExtras: NavigationExtras = {
      state: {
        name,
        logo: this.eurobetImage
      }
    }
    this.router.navigate(['./detail-page'], navigationExtras);
  }

  snai() {
    const name = 'Snai'
    const navigationExtras: NavigationExtras = {
      state: {
        name,
        logo: this.snaiImage
      }
    }
    this.router.navigate(['./detail-page'], navigationExtras);
  }

  goldbet() {
    const name = 'Goldbet'
    const navigationExtras: NavigationExtras = {
      state: {
        name,
        logo: this.goldbImage
      }
    }
    this.router.navigate(['./detail-page'], navigationExtras);
  }


  profileStudent() {
    this.router.navigate(['./profile-student']);
  }
}



