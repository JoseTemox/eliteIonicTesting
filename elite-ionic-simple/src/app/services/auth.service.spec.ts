import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'


describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [

      ],

      providers: [
          AuthService
      ],

      imports: [
          HttpClientTestingModule
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
});
