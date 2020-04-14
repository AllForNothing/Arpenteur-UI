/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Scanner } from '../models/scanner';
@Injectable({
  providedIn: 'root',
})
class ScannersService extends __BaseService {
  static readonly listScannersPath = '/scanners';
  static readonly addScannerPath = '/scanners';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ScannersService.ListScannersParams` containing the following parameters:
   *
   * - `since`:
   *
   * - `limit`:
   *
   * @return list the reports operations
   */
  listScannersResponse(params: ScannersService.ListScannersParams): __Observable<__StrictHttpResponse<Array<Scanner>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.since != null) __params = __params.set('since', params.since.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/scanners`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Scanner>>;
      })
    );
  }
  /**
   * @param params The `ScannersService.ListScannersParams` containing the following parameters:
   *
   * - `since`:
   *
   * - `limit`:
   *
   * @return list the reports operations
   */
  listScanners(params: ScannersService.ListScannersParams): __Observable<Array<Scanner>> {
    return this.listScannersResponse(params).pipe(
      __map(_r => _r.body as Array<Scanner>)
    );
  }

  /**
   * @param body undefined
   * @return Created
   */
  addScannerResponse(body?: Scanner): __Observable<__StrictHttpResponse<Scanner>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/scanners`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Scanner>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Created
   */
  addScanner(body?: Scanner): __Observable<Scanner> {
    return this.addScannerResponse(body).pipe(
      __map(_r => _r.body as Scanner)
    );
  }
}

module ScannersService {

  /**
   * Parameters for listScanners
   */
  export interface ListScannersParams {
    since?: number;
    limit?: number;
  }
}

export { ScannersService }
