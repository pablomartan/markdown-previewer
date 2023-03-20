import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { store, mapDispatchToProps, mapStateToProps } from './redux/main.js';
import { App } from './react/app.js';

const Present = connect(mapStateToProps, mapDispatchToProps)(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Present />
  </Provider>
);
