import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor() {

  }

  getModuleById(id){
    let moduleToReturn = this.getModules().find((courseModule) => {
      return courseModule.id == id;
    });

    return moduleToReturn;
    // return {
    //   title: '',
    //   description: '',
    //   lessons: [
    //     {title: 'lesson 1'},
    //     {title: 'lesson 2'},
    //     {title: 'lesson 3'},
    //     {title: 'lesson 4'}
    //   ]
    // }
  }

  getLessonById(moduleId, lessonId){
    let moduleWithLesson = this.getModules().find((courseModule) => {
      return courseModule.id == moduleId;
    });

    let lessonToReturn = moduleWithLesson.lessons.find((lesson) => {
      return lesson.id == lessonId;
    })

    return lessonToReturn;
    // return {
    //   title: 'lesson 1',
    //   content: 'this is the lesson content'
    // }
  }
  getModules(){

    let modules = [
      {
          id: '1',
        title: 'Module One',
        description: 'Test',
        lessons: [
          {id: '1', title: 'lesson 1', content: 'this is the lesson content'},
          {id: '2', title: 'lesson 2', content: 'this is the lesson content'}
        ]
      },
      {
          id: '2',
        title: 'Module Two',
        description: 'Test',
        lessons: [
          {id: '1', title: 'lesson 1', content: 'this is the lesson content'},
          {id: '2', title: 'lesson 2', content: 'this is the lesson content'}
        ]
      },
      {
          id: '3',
        title: 'Module Three',
        description: 'Test',
        lessons: [
          {id: '1', title: 'lesson 1', content: 'this is the lesson content'},
          {id: '2', title: 'lesson 2', content: 'this is the lesson content'}
        ]
      },
      {
          id: '4',
        title: 'Module Four',
        description: 'Test',
        lessons: [
          {id: '1', title: 'lesson 1', content: 'this is the lesson content'},
          {id: '2', title: 'lesson 2', content: 'this is the lesson content'}
        ]
      },
      {
          id: '5',
        title: 'Module Five',
        description: 'Test',
        lessons: [
          {id: '1', title: 'lesson 1', content: 'this is the lesson content'},
          {id: '2', title: 'lesson 2', content: 'this is the lesson content'}
        ]
      },
    ];

    return modules;

    }

}