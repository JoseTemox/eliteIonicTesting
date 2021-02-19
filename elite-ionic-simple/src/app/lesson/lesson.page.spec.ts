import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';

import { LessonPage } from './lesson.page';
import { ActivatedRoute } from '@angular/router';
import { ModulesService } from '../services/modules.service';
import { ModulesMock } from 'mocks/mocks-app';
import { NavMock } from 'mocks/mocks-ionic';

describe('LessonPage', () => {
  let component: LessonPage;
  let fixture: ComponentFixture<LessonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonPage ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            snapshot: { paramMap: { get: (path) => { return '1'} }}
          }
        },
        { provide: ModulesService, useClass: ModulesMock },
        { provide: NavController, useClass: NavMock },
        { provide: ModulesService, useClass: ModulesMock },
        
      ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LessonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a lesson class member that is an object', () => {
    expect(component.lesson instanceof Object).toBe(true);
  });
  
  it('should set up the passed in lesson as the lesson class member', () => {

    let modulesService: any = fixture.debugElement.injector.get(ModulesService);

    modulesService.getLessonById = jasmine.createSpy('getLessonById').and.returnValue({
        title: 'lesson 1',
        content: 'this is the test content'
    });

    component.ngOnInit();
    //console.log(component.lesson.title)

    expect(component.lesson.title).toBe('lesson 1');

  });
});
