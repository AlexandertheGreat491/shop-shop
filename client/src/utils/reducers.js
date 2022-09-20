// imports the useReducer hook from react
import { useReducer } from 'react';
// actual functionality that carries out the emitted action to update state

import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "./actions";

export const reducer = (state, action) => {
  // passes the action.type argument into a switch statement
  switch (action.type) {
    // if the actiontype value is the value of UPDATE_PRODUCTS, return a new state object with an updated products array
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    // if it's none of these actions, don't update state at all & keep things the same!
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    default:
      return state;
  }
};
