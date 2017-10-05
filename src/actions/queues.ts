import { Action } from '@ngrx/store';
import { ObjQueue } from '../models/queue';

export const UPDATE = '[Queues] Update';
export const ASK_TURN = '[Queues] Ask Turn';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export class Update implements Action {
  readonly type = UPDATE;

  constructor(public payload: Queue[]) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = Update;
