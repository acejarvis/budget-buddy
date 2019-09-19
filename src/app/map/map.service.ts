import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) {}
  Url = 'https://lngmgtest.azurewebsites.net/api/';

  getMarkers(customerId: string): Observable<any[]> {
    const config = 'users/';
    return this.http.get<any[]> (this.Url + config + customerId + '&home');
  }

}
