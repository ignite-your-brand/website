import Ember from 'ember';

export function isEven(params/*, hash*/) {
  return params[0] % 2 === 0;
}

export default Ember.Helper.helper(isEven);
