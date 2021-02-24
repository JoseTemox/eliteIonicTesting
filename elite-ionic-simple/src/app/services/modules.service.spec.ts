import { TestBed } from '@angular/core/testing';

import { ModulesService } from './modules.service';

describe('ModulesService', () => {
  let service: ModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('the getModules function should return an array', () => {
    const modulesService = TestBed.get(ModulesService);
    expect(modulesService.getModules() instanceof Array).toBe(true);
  });

  it('the getModuleById function should return a module when given a module id', () => {
    const modulesService = TestBed.get(ModulesService);

    let testId = '1';

    let testModule = modulesService.getModuleById(testId);

    expect(testModule.title).toBe('Module One')

  });

  it('the getLessonById function should return a lesson when given a module id and lesson id', () => {
    const modulesService = TestBed.get(ModulesService);

    let testModuleId = '1';
    let testLessonId = '2';

    let testLesson = modulesService.getLessonById(testModuleId, testLessonId);
    expect(testLesson.title).toBe('lesson 2')

  });

});
