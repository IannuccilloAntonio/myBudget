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


  weeklyRanking() {
    const name = 'settimanale'
    // tslint:disable-next-line: variable-name
    const type_ranking = 1
    const isProfessor = false
    const navigationExtras: NavigationExtras = {
      state: {
        name,
        type_ranking,
        isProfessor
      }
    }
    this.router.navigate(['./rankings'], navigationExtras);
  }

  globalRanking() {
    const name = 'globale'
    // tslint:disable-next-line: variable-name
    const type_ranking = 0
    const isProfessor = false
    const navigationExtras: NavigationExtras = {
      state: {
        name,
        type_ranking,
        isProfessor
      }
    }
    this.router.navigate(['./rankings'], navigationExtras);
  }

  missions() {
    this.router.navigate(['./selection-mission']);
  }

  viewMatch() {
    this.router.navigate(['./view-match']);
  }

  startGame() {
    this.storage.set('type', 'Sfida Individuale')
    this.router.navigate(['./new-game/teachings-list']);
  }

  startTraining() {
    this.storage.set('type', 'Allenamento')
    this.router.navigate(['./new-game/teachings-list']);
  }

  profileStudent() {
    this.router.navigate(['./profile-student']);
  }
}



