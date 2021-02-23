import { Component,OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public modules: Object[] = [];

  constructor(private navCtrl: NavController, private authService: AuthService) {};
  ngOnInit(){



    this.modules = [
      {id: 1, title: 'Module One', description: 'Test'},
      {id: 2, title: 'Module Two', description: 'Test'},
      {id: 3, title: 'Module Three', description: 'Test'},
      {id: 4, title: 'Module Four', description: 'Test'},
      {id: 5, title: 'Module Five', description: 'Test'}
    ];


  };
  openModule(id){
    //console.log(id);
		this.navCtrl.navigateForward('/module/' + id);

  }
  logout(){
    this.authService.logout();
}

}
