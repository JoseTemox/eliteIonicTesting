import { Component, OnInit, Injectable } from '@angular/core';
import { ModulesService } from '../services/modules.service';
import { ActivatedRoute } from '@angular/router';
//@Injectable() 


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit {

  public lesson: any = {title: '', content: ''};

  constructor(private modulesService: ModulesService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    let moduleId = this.route.snapshot.paramMap.get('moduleId');
    let lessonId = this.route.snapshot.paramMap.get('lessonId');
    this.lesson = this.modulesService.getLessonById(moduleId,lessonId);
  }

}