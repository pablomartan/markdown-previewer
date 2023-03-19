import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { inputChange } from './actionCreators.js';
import * as Types from './actionTypes.js';

const defaultState = {
  'input': ''
};

// TODO: actions for input, parse, render

// TODO: async function to parse md text in input

// TODO: create reducer for actions

const middleWarePlaceHolder = applyMiddleware(thunk);

const reducer = (state = defaultState, action) => {
  return action.type === Types.USER_INPUT ? action.input : state;
};

export const store = createStore(reducer, middleWarePlaceHolder);

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
