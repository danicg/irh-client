import { Action } from '@ngrx/store';
import { Category } from '../models/category';

export const LOAD_COMPLETE = '[Categories] Load';
export const SELECT_CATEGORY = '[Categories] Select Category';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export class LoadComplete implements Action {
  readonly type = LOAD_COMPLETE;

  constructor(public payload: Category[]) {}
}

export class Select implements Action {
  readonly type = SELECT_CATEGORY;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = LoadComplete | Select;
