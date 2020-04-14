/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly getPath = '/';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Welcome message of arpenteur
   */
  getResponse(): __Observable<__StrictHttpResponse<{appname?: string, version?: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{appname?: string, version?: string}>;
      })
    );
  }
  /**
   * @return Welcome message of arpenteur
   */
  get(): __Observable<{appname?: string, version?: string}> {
    return this.getResponse().pipe(
      __map(_r => _r.body as {appname?: string, version?: string})
    );
  }
}

module ApiService {
}

export { ApiService }
