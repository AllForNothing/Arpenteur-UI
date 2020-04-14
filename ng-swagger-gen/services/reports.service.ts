/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Report } from '../models/report';
@Injectable({
  providedIn: 'root',
})
class ReportsService extends __BaseService {
  static readonly listReportsPath = '/reports';
  static readonly addReportPath = '/reports';
  static readonly getReportPath = '/reports/{id}';
  static readonly updateReportPath = '/reports/{id}';
  static readonly destroyReportPath = '/reports/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ReportsService.ListReportsParams` containing the following parameters:
   *
   * - `tag`:
   *
   * - `since`:
   *
   * - `repo`:
   *
   * - `limit`:
   *
   * - `digest`:
   *
   * @return list the reports operations
   */
  listReportsResponse(params: ReportsService.ListReportsParams): __Observable<__StrictHttpResponse<Array<Report>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.tag != null) __params = __params.set('tag', params.tag.toString());
    if (params.since != null) __params = __params.set('since', params.since.toString());
    if (params.repo != null) __params = __params.set('repo', params.repo.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    (params.digest || []).forEach(val => {if (val != null) __params = __params.append('digest', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/reports`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Report>>;
      })
    );
  }
  /**
   * @param params The `ReportsService.ListReportsParams` containing the following parameters:
   *
   * - `tag`:
   *
   * - `since`:
   *
   * - `repo`:
   *
   * - `limit`:
   *
   * - `digest`:
   *
   * @return list the reports operations
   */
  listReports(params: ReportsService.ListReportsParams): __Observable<Array<Report>> {
    return this.listReportsResponse(params).pipe(
      __map(_r => _r.body as Array<Report>)
    );
  }

  /**
   * @param body undefined
   * @return Created
   */
  addReportResponse(body?: Report): __Observable<__StrictHttpResponse<Report>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/reports`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Report>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Created
   */
  addReport(body?: Report): __Observable<Report> {
    return this.addReportResponse(body).pipe(
      __map(_r => _r.body as Report)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  getReportResponse(id: number): __Observable<__StrictHttpResponse<Report>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/reports/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Report>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  getReport(id: number): __Observable<Report> {
    return this.getReportResponse(id).pipe(
      __map(_r => _r.body as Report)
    );
  }

  /**
   * @param params The `ReportsService.UpdateReportParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return OK
   */
  updateReportResponse(params: ReportsService.UpdateReportParams): __Observable<__StrictHttpResponse<Report>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/reports/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Report>;
      })
    );
  }
  /**
   * @param params The `ReportsService.UpdateReportParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return OK
   */
  updateReport(params: ReportsService.UpdateReportParams): __Observable<Report> {
    return this.updateReportResponse(params).pipe(
      __map(_r => _r.body as Report)
    );
  }

  /**
   * @param id undefined
   */
  destroyReportResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/reports/${encodeURIComponent(id)}`,
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
   * @param id undefined
   */
  destroyReport(id: number): __Observable<null> {
    return this.destroyReportResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ReportsService {

  /**
   * Parameters for listReports
   */
  export interface ListReportsParams {
    tag?: string;
    since?: number;
    repo?: string;
    limit?: number;
    digest?: Array<string>;
  }

  /**
   * Parameters for updateReport
   */
  export interface UpdateReportParams {
    id: number;
    body?: Report;
  }
}

export { ReportsService }
