/* tslint:disable */
import { Repository } from './repository';
import { Scanner } from './scanner';
import { Vulnerability } from './vulnerability';
export interface Report {
  digest?: string;
  id?: number;
  repositories?: Array<Repository>;
  revision?: number;
  scanner?: Scanner;
  timestamp?: string;
  vulnerabilities?: Array<Vulnerability>;
}
