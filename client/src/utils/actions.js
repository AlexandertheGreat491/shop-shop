// actions define type of events that be emitted to update state
// state only updated if predefined action

// UPDATE_PRODUCTS used to store product data in global state instead of going through Apollo server every time
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// stores a list of categories in a global state
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// connects products and categories 
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

