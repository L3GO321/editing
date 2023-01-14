import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { reducer, preloadedState } from './reducers'

const store = configureStore({ reducer, preloadedState })

export const StoreProvider = (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}