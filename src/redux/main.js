import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const defaultState = {
  'input': ''
};

// TODO: actions for input, parse, render

// TODO: async function to parse md text in input

// TODO: function for updating input

// TODO: create reducer for actions

const middleWarePlaceHolder = applyMiddleware(thunk);

const reducer = (state = defaultState, action) => {
  return state;
};

export const store = createStore(reducer);

// TODO: export mapStateToProps

// TODO: export mapDispatchToProps
