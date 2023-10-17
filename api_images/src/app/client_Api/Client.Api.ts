import { IApiRequest, IResults } from './Api.interfaces';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientApi {
  private baseUrl = `https://api.unsplash.com/search/photos?query={0}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;

  constructor(private http: HttpClient) {
  }

  apiRequest(word: string): Observable<IResults[] | null> {
    if (!word) {
      return of(null)
    }

    return this.http.get<IApiRequest>(this.baseUrl.replace('{0}', word)).pipe(map(res => res.results))
  }
}
