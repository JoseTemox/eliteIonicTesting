import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule, NavController, LoadingController } from '@ionic/angular';

import { LoginPage } from './login.page';
import { NavMock, LoadingControllerMock } from 'mocks/mocks-ionic';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import { AuthMock } from 'mocks/mocks-app';
import { FormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      providers: [
        { provide: NavController, useClass: NavMock },
        { provide: LoadingController, useClass: LoadingControllerMock },
        { provide: AuthService, useClass: AuthMock }
      ],
      imports: [FormsModule,IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a licenseKey class member', () => {

    expect(component.licenseKey).toBeDefined();

  });

  it('should show a loading overlay whilst an authentication request is being made', fakeAsync(() => {

    let authProvider = fixture.debugElement.injector.get(AuthService);
    let loadingCtrl = fixture.debugElement.injector.get(LoadingController);

    let spiedObject;

    spyOn(loadingCtrl, 'create').and.callFake(() => {

      spiedObject = {
        present: () => { return Promise.resolve(true) },
        dismiss: () => { return Promise.resolve(true) }
      };

      spyOn(spiedObject, 'present');

      return Promise.resolve(spiedObject);

    });

    let authResponse = {
      isValid: true
    };

    spyOn(authProvider, 'checkKey').and.returnValue(of(authResponse));

    component.licenseKey = 'abcde-fghi';

    component.login();

    tick();

    expect(spiedObject.present).toHaveBeenCalled();

  }));

  it('should dimiss the loading overlay after getting a response from the server', fakeAsync(() => {

    let authProvider = fixture.debugElement.injector.get(AuthService);
    let loadingCtrl = fixture.debugElement.injector.get(LoadingController);

    let spiedObject;

    spyOn(loadingCtrl, 'create').and.callFake(() => {

      spiedObject = {
        present: () => { return Promise.resolve(true) },
        dismiss: () => { return Promise.resolve(true) }
      };

      spyOn(spiedObject, 'dismiss').and.callThrough();

      return Promise.resolve(spiedObject);

    });

    let authResponse = {
      isValid: true
    };

    spyOn(authProvider, 'checkKey').and.returnValue(of(authResponse));

    component.licenseKey = 'abcde-fghi';

    component.login();

    tick();

    expect(spiedObject.dismiss).toHaveBeenCalled();

  }));

  it('after a successful login, the root page should be changed to HomePage', fakeAsync(() => {

    let navCtrl = fixture.debugElement.injector.get(NavController);
    let authProvider = fixture.debugElement.injector.get(AuthService);

    let authResponse = {
      isValid: true
    };

    spyOn(authProvider, 'checkKey').and.returnValue(of(authResponse));
    spyOn(navCtrl, 'navigateRoot');

    component.licenseKey = 'abcde-fghi';

    component.login();

    tick();

    expect(navCtrl.navigateRoot).toHaveBeenCalledWith('/home');

  }));
  it('if the user has a valid license key in storage then they should be taken straight to the home page', fakeAsync(() => {

    let authProvider = fixture.debugElement.injector.get(AuthService);
    let navCtrl = fixture.debugElement.injector.get(NavController);

    spyOn(navCtrl, 'navigateRoot');
    spyOn(authProvider, 'reauthenticate').and.returnValue(Promise.resolve(true));

    component.ngOnInit();

    tick();

    expect(navCtrl.navigateRoot).toHaveBeenCalledWith('/home');

  }));

});
