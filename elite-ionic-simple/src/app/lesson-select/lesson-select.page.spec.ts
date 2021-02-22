import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LessonSelectPage } from './lesson-select.page';
import { NavController } from '@ionic/angular';
import { NavMock } from 'mocks/mocks-ionic';
import { ModulesService } from '../services/modules.service';
import { ActivatedRoute } from '@angular/router';
import { ModulesMock } from 'mocks/mocks-app';


describe('LessonSelectPage', () => {
  let component: LessonSelectPage;
  let fixture: ComponentFixture<LessonSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonSelectPage ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            snapshot: { paramMap: { get: (path) => { return '1'} }}
          }
        },
        { provide: NavController, useClass: NavMock },
        { provide: ModulesService, useClass: ModulesMock },

      ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LessonSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set up the passed in module on the module class member', () => {

    let modulesService: any = fixture.debugElement.injector.get(ModulesService);

    modulesService.getModuleById = jasmine.createSpy('getModuleById').and.returnValue({
      id: '1',
      title: 'test',
      description: 'test',
      lessons: [
        {title: 'lesson 1'},
        {title: 'lesson 2'},
        {title: 'lesson 3'},
        {title: 'lesson 4'}
      ]
    });

    component.ngOnInit();

    expect(component.module.lessons.length).toBe(4);

  });

  it('the openLesson() function should navigate to the LessonPage', () => {

    let navCtrl = fixture.debugElement.injector.get(NavController);

    spyOn(navCtrl, 'navigateForward');

    component.module = {
      id: '1'
    };

    let testLesson = {id: '1'};

    component.openLesson(testLesson);

    expect(navCtrl.navigateForward).toHaveBeenCalledWith('/module/1/lesson/' + testLesson.id);

  });
});
