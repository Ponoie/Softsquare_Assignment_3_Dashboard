import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Item {
  id: number;
  name: string;
}


@Injectable({ 
  providedIn: 'root',
})
export class ShareService {

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get('https://api.openbrewerydb.org/breweries/search?page=1&per_page=5&query=test');
  }
}
