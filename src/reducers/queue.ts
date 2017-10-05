//import { createSelector } from 'reselect';
import { createSelector } from '@ngrx/store';
import { ObjQueue } from '../models/queue';
import * as queues from '../actions/queues';


export interface State {
  queues: ObjQueue[]
};

export const initialState: State = {
  queues: []
};

export function reducer(state = initialState, action: queues.Actions): State {
  switch (action.type) {
    case queues.UPDATE: {
      const queues = action.payload;
      console.log('here', action.payload);
      return {
        //...state,
        queues: [...queues]
      };
    }
    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
export const getQueues = (state: State) => state.queues;