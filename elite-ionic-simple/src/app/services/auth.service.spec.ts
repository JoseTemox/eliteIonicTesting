import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { IonicStorageModule, Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { NavMock } from 'mocks/mocks-ionic';


describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [

      ],

      providers: [
        { provide: NavController, useClass: NavMock },
          AuthService,
      ],

      imports: [
          HttpClientTestingModule,
          IonicStorageModule.forRoot()
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('checkKey should make a call to the server to check the validity of a key', inject([AuthService, HttpTestingController], (authService, httpMock) => {

    let key = 'ewu0fef0ewuf08j3892jf98';
    let mockResponse = '{"isValid": true}';

    authService.checkKey(key).subscribe((result: any) => {
        expect(result).toEqual(mockResponse);
    });

    // Expect a request to the URL
    const mockReq = httpMock.expectOne('http://localhost:8080/api/check');

    // Execute the request using the mockResponse data
    mockReq.flush(mockResponse);

  }));

  it('reauthenticate should automatically check key if in storage', fakeAsync(inject([AuthService, HttpTestingController], (authService, httpMock) => {

    let mockResponse = '{"isValid": true}';

    spyOn(authService.storage, 'get').and.returnValue(Promise.resolve('abcde-fghi-jklm'));


    authService.reauthenticate();

    tick();

    // Expect a request to the URL
    const mockReq = httpMock.expectOne('http://localhost:8080/api/check');

    // Execute the request using the mockResponse data
    mockReq.flush(mockResponse);

  })));
  it('checkKey should save the key being checked to storage', fakeAsync(inject([AuthService, HttpTestingController], (authService, httpMock) => {

    let key = 'ewu0fef0ewuf08j3892jf98';
    let mockResponse = '{"isValid": true}';

    spyOn(authService.storage, 'set');

    authService.checkKey(key).subscribe((result: any) => {
        expect(result).toEqual(mockResponse);
    });

    tick();

    // Expect a request to the URL
    const mockReq = httpMock.expectOne('http://localhost:8080/api/check');

    // Execute the request using the mockResponse data
    mockReq.flush(mockResponse);

    expect(authService.storage.set).toHaveBeenCalledWith('eliteLicenseKey', 'ewu0fef0ewuf08j3892jf98');

  })));
  it('the logout function should set the root page to the Login Page', fakeAsync(inject([AuthService, NavController], (authService, navCtrl) => {

    spyOn(authService.storage, 'set').and.returnValue(Promise.resolve(true));
    spyOn(navCtrl, 'navigateRoot');

    authService.logout();

    tick();

    expect(navCtrl.navigateRoot).toHaveBeenCalledWith('/login');

  })));

it('the logout function should clear the key in storage', inject([AuthService], (authService) => {

    spyOn(authService.storage, 'set').and.returnValue(Promise.resolve(true));

    authService.logout();

    expect(authService.storage.set).toHaveBeenCalledWith('eliteLicenseKey', null);

}));




});




