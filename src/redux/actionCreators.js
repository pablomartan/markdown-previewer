/*
 * Create actions for
 *  - controlled text area
 *  - parse input (submit)
 *  - render parsed input
*/

// Import actions types
import * as Types from './actionTypes.js';

/**
 * @description: creates an action for user input and returns the text the user
 * has input
 * @param {Event} e: the CHANGE event
 * @returns an action object with type USER_INPUT and the text of the text area
 */
export const inputChange = e => {
  const value = e.target.value;
  return {
    'type': Types.USER_INPUT,
    'input': value
  }
};
