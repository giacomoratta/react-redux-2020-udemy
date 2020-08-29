import React from "react";
import ReactDOM from "react-dom";

// Provider wiring-up
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// App
import App from "./components/App";

// old render
// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// );

// new render with Provider -> now any component can use store through Connect component
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);