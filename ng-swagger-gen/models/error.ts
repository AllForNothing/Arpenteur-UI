/* tslint:disable */

/**
 * a model for all the error response coming from harbor
 */
export interface Error {

  /**
   * The error code
   */
  code?: number;

  /**
   * The error message
   */
  message: string;
}
