/* tslint:disable:no-unused-variable */

import {
  fakeAsync,
  inject,
  TestBed
} from '@angular/core/testing';
import {
  HttpModule,
  XHRBackend,
  ResponseOptions,
  Response,
  RequestMethod
} from '@angular/http';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing/mock_backend';
import { DataService } from './data.service';
import { mockData } from './mock-data-test';

const mockResponse = mockData();

describe('Service: DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {
          provide: XHRBackend,
          useClass: MockBackend
        },
        DataService
      ]
    });
  });

  it('should ...', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should get data', fakeAsync(
    inject([
      XHRBackend,
      DataService
    ], (mockBackend: MockBackend, dataService: DataService) => {

      const expectedUrl = './mock-data.json';

      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          expect(connection.request.method).toBe(RequestMethod.Get);
          expect(connection.request.url).toBe(expectedUrl);

          connection.mockRespond(new Response(
            new ResponseOptions({ body: mockResponse })
          ));
        });

      dataService.getData()
        .subscribe(res => {
          expect(res).toEqual(mockResponse);
        });
    })
  ));
});
