/* tslint:disable */
import { HarborScanResource } from './harbor-scan-resource';
import { HarborScanRepository } from './harbor-scan-repository';
export interface HarborScanEvent {
  event_data?: {resources?: Array<HarborScanResource>, repository?: HarborScanRepository};
  occur_at?: number;
  operator?: string;
  type?: string;
}
