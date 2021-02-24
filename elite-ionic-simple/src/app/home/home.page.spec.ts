import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomePage } from './home.page';
import { NavController } from '@ionic/angular';
import { NavMock } from 'mocks/mocks-ionic';
import { AuthService } from '../services/auth.service';
import { AuthMock, ModulesMock } from 'mocks/mocks-app';
import { ModulesService } from '../services/modules.service';


describe('HomePage', () => {
  let component: any;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      providers: [
        { provide: NavController, useClass: NavMock },
        { provide: ModulesService, useClass: ModulesMock },
        { provide: AuthService, useClass: AuthMock },
      ],

      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component instanceof HomePage).toBeTruthy();
  });

  it('should have a class member called modules that is an array', () => {

    expect(component.modules instanceof Array).toBe(true);

  });

  it('the openModule() function should navigate to the LessonListPage', () => {

    let navCtrl = fixture.debugElement.injector.get(NavController);

    spyOn(navCtrl, 'navigateForward');

    let testModule = {title: 'pretend module', id: '1'};

    component.openModule(testModule.id);

    expect(navCtrl.navigateForward).toHaveBeenCalledWith('/module/' + testModule.id);

  });

  it('the logout function should call the logout method of the auth provider', () => {

    let authProvider = fixture.debugElement.injector.get(AuthService);

    spyOn(authProvider, 'logout');

    component.logout();

    expect(authProvider.logout).toHaveBeenCalled();

  });

  it('the modules class member should contain 5 modules after ngOnInit has been triggered', () => {

    let moduleProvider = fixture.debugElement.injector.get(ModulesService);

    spyOn(moduleProvider, 'getModules').and.returnValue(
      [
        {
          id:'1',title: 'Module One',
          description: 'Test',
          lessons: [
            {id: '1', title: 'lesson 1', content: 'this is the lesson content'},
            {id: '2', title: 'lesson 2', content: 'this is the lesson content'}
          ]
        },
        {
          id:'2',title: 'Module two',
          description: 'Test',
          lessons: [
            {id: '1', title: 'lesson 1', content: 'this is the lesson content'},
            {id: '2', title: 'lesson 2', content: 'this is the lesson content'}
          ]
        },{
          id:'3',title: 'Module Three',
          description: 'Test',
          lessons: [
            {id: '1', title: 'lesson 1', content: 'this is the lesson content'},
            {id: '2', title: 'lesson 2', content: 'this is the lesson content'}
          ]
        },{
          id:'4',title: 'Module Four',
          description: 'Test',
          lessons: [
            {id: '1', title: 'lesson 1', content: 'this is the lesson content'},
            {id: '2', title: 'lesson 2', content: 'this is the lesson content'}
          ]
        },{
          id:'5',title: 'Module Five',
          description: 'Test',
          lessons: [
            {id: '1', title: 'lesson 1', content: 'this is the lesson content'},
            {id: '2', title: 'lesson 2', content: 'this is the lesson content'}
          ]
        },]);

    component.ngOnInit();

    expect(component.modules.length).toBe(5);

  });



});




















// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { IonicModule } from '@ionic/angular';

// import { HomePage } from './home.page';

// describe('HomePage', () => {
//   let component: HomePage;
//   let fixture: ComponentFixture<HomePage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HomePage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(HomePage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
