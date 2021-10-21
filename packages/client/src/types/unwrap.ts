import { CallEffect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

/**
 * Unwrap infers return type of promises, sagas and other async functions
 */
export type Unwrap<T> = T extends (...args: any) => Promise<any>
  ? T extends (...args: any) => Promise<infer U>
    ? U
    : T
  : T extends () => Iterator<any, infer U, any>
    ? U
    : T extends (...args: any) => Generator<CallEffect<AxiosResponse<infer U>>>
      ? U
      : any;
