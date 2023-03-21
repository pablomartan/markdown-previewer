import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { inputChange } from './actionCreators.js';
import * as Types from './actionTypes.js';
import { sampleMd } from './sampleMd.js';

const defInput = sampleMd.join('');

const defaultState = {
  'input': defInput,
  'parsed': marked.parse(defInput, { breaks: true }) 
};

const middleWarePlaceHolder = applyMiddleware(thunk);

const reducer = (state = defaultState, action) => {
  return action.type === Types.USER_INPUT ? { 'input': action.input, 'parsed': action.parsed } : state;
};

export const store = createStore(reducer, middleWarePlaceHolder);

export const mapDispatchToProps = dispatch => {
  return {
    // see docs for inputChange on ./actionCreators.js'
    inputHandler: e => {
      dispatch(inputChange(e));
    }
  }
};

export const mapStateToProps = state => {
  return {
    input: state.input,
    parsed: state.parsed
  }
};
