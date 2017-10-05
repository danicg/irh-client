//import { createSelector } from 'reselect';
import { createSelector } from '@ngrx/store';
import { Category } from '../models/category';
import * as categories from '../actions/categories';


export interface State {
  categories: Category[],
  selectedCategoryId: string;
};

export const initialState: State = {
  categories: [],
  selectedCategoryId: null
};

export function reducer(state = initialState, action: categories.Actions): State {
  switch (action.type) {
    case categories.LOAD_COMPLETE: {
      const categories = action.payload;
      console.log('here', action.payload);
      return {
        ...state,
        categories: [...categories]
      };
    }
    case categories.SELECT_CATEGORY: {
      return {
        ...state,
        selectedCategoryId: action.payload
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
export const getCategories = (state: State) => state.categories;
export const getSelectedCategoryId = (state: State) => state.selectedCategoryId;
export const getSelected = createSelector(getCategories, getSelectedCategoryId, (categories, selectedId) => {
  return categories.find(e => e.id === selectedId);
});
