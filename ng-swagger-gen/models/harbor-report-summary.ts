/* tslint:disable */
import { Scanner } from './scanner';
import { HarborVulnerabilitySummary } from './harbor-vulnerability-summary';

/**
 * The summary for the native report
 */
export interface HarborReportSummary {

  /**
   * The seconds spent for generating the report
   */
  duration?: number;

  /**
   * The end time of the scan process that generating report
   */
  end_time?: string;

  /**
   * id of the native scan report
   */
  report_id?: string;

  /**
   * The status of the report generating process
   */
  scan_status?: string;
  scanner?: Scanner;

  /**
   * The overall severity
   */
  severity?: string;

  /**
   * The start time of the scan process that generating report
   */
  start_time?: string;
  summary?: HarborVulnerabilitySummary;
}
