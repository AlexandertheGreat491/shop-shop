// createContext is used to create new Context object
// useContext is a React hook for using the state created by the createContext function
import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
// Provider is a special type of React component for wrapping the application
// so that it can  make the state data that's passed into it as a prop available to all other components
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };