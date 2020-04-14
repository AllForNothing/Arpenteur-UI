/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { HarborScanEvent } from '../models/harbor-scan-event';
@Injectable({
  providedIn: 'root',
})
class HarborService extends __BaseService {
  static readonly ScanEventPath = '/webhooks/harbor';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   */
  ScanEventResponse(body?: HarborScanEvent): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/webhooks/harbor`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  ScanEvent(body?: HarborScanEvent): __Observable<null> {
    return this.ScanEventResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module HarborService {
}

export { HarborService }
