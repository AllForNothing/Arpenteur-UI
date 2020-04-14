/* tslint:disable */
import { HarborReportSummary } from './harbor-report-summary';

/**
 * The scan overview attached in the metadata of tag
 */
export interface HarborScanOverview {
  [prop: string]: HarborReportSummary;
}
