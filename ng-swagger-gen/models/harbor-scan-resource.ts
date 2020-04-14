/* tslint:disable */
import { HarborScanOverview } from './harbor-scan-overview';
export interface HarborScanResource {
  digest?: string;
  resource_url?: string;
  scan_overview?: HarborScanOverview;
  tag?: string;
}
