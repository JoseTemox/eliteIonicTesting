import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor() { 

  }

  getModuleById(id){
    return {
      title: '',
      description: '',
      lessons: [
        {title: 'lesson 1'},
        {title: 'lesson 2'},
        {title: 'lesson 3'},
        {title: 'lesson 4'}
      ]
    }
  }

  getLessonById(moduleId, lessonId){
    return {
      title: 'lesson 1',
      content: 'this is the lesson content'
    }
  }

}