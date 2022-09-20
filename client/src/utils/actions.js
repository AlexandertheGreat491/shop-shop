// actions define type of events that be emitted to update state
// state only updated if predefined action

// UPDATE_PRODUCTS used to store product data in global state instead of going through Apollo server every time
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// stores a list of categories in a global state
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// connects products and categories 
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';

