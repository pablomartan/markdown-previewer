/*
 * Create reducers for different actions
 */
import * as Types from './actionTypes.js';

const defaultInput = { 'input': '' };

export const inputReducer = (state = defaultInput, action) => {
  return action.type === Types.USER_INPUT ? action.input : state;
};

export const parseReducer = () => { return defaultInput };

export const renderReducer = () => { return defaultInput };
