import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ModulesService } from '../services/modules.service';

@Component({
  selector: 'app-lesson-select',
  templateUrl: './lesson-select.page.html',
  styleUrls: ['./lesson-select.page.scss'],
})
export class LessonSelectPage implements OnInit {
  public module: any = {};
  public arregloPrueba: string[] = ['1','2','3'];


  constructor(private navCtrl: NavController, private route: ActivatedRoute, private modulesService: ModulesService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.module = this.modulesService.getModuleById(id);
    //console.log(this.module);

  }
  openLesson(lesson){
    //console.log(this.module);
    this.navCtrl.navigateForward('/module/' + this.module.id + '/lesson/' + lesson.id);
  }

}
