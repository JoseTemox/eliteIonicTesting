import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthService,  } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public licenseKey: string = '';
  public loading: any;

  constructor(private navCtrl: NavController, private authProvider: AuthService, private loadingCtrl: LoadingController) { }

  ngOnInit() {


     this.authProvider.reauthenticate().then((res) => {
       this.navCtrl.navigateRoot('/home');
     }, (err) => {
       console.log('Maybe next time!');
     });


  }

  login(){

    this.loadingCtrl.create({
      message: 'Authenticating...'
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.authProvider.checkKey(this.licenseKey)
      .subscribe((res) => {
      console.log('aqui');

        this.loading.dismiss().then(() => {
          this.navCtrl.navigateRoot('/home');
        });
      }, (err) => {
        this.loading.dismiss();
      });

    })

  }

}
