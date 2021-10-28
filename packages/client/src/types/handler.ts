import { ActionFn } from '@option-blitz/libs/types/redux';

export type HandlerFn<F extends (...args: any[]) => any, S> = ActionFn<S, ReturnType<F>>;
