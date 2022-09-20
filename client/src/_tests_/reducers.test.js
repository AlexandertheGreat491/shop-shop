import { reducer } from '../utils/reducers';
// import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
  } from '../utils/actions';
  
  // create a sample of what our global state will look like
  const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
  };

  // test for the UPDATE_PRODUCTS action
  test('UPDATE_PRODUCTS', () => {
    // newState will be the result of the reducer()
    // accepts two arguments: the current state object & type & value
    // value is not always called value & in this case is products
    let newState = reducer(initialState, {
    // type of action being performed
      type: UPDATE_PRODUCTS,
      products: [{}, {}]
    });
  
    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
  });

  // test for the UPDATE_CATEGORIES action
  test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CATEGORIES,
      categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
  });