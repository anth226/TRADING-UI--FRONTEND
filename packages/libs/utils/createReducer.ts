import type { Action } from 'redux';
import { ActionFn } from '../types/redux';

/**
 * creates reducer with initial state and handlers (Record<action, handler>)
 * @param initialState
 * @param handlers
 */
const createReducer = <T>(
  initialState: T,
  handlers: Record<string, ActionFn<T, any>>,
) => (state = initialState, action: Action<string> & any) =>
    (Object.prototype.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state);

export default createReducer;
