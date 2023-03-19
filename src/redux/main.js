import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { inputChange } from './actionCreators.js';
import * as Types from './actionTypes.js';
import * as Reducers from './reducers.js';

const defaultState = {
  'input': ''
};

// TODO: actions for input, parse, render

// TODO: async function to parse md text in input

// TODO: create reducer for actions

const middleWarePlaceHolder = applyMiddleware(thunk);

const rootReducer = combineReducers(
  {
    inputChange: Reducers.inputReducer,
    inputParse: Reducers.parseReducer,
    inputRender: Reducers.renderReducer
  }
);

export const store = createStore(rootReducer, middleWarePlaceHolder);

export const mapDispatchToProps = dispatch => {
  return {
    inputHandler: () => {
      dispatch(inputChange());
    }
  }
};

export const mapStateToProps = state => {
  return {
    input: state.input
  }
};
