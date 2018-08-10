import Ember from 'ember';

export function activeClass(params) {
  const [ index, active ] = params; // use ES6 destructuring
  return (index === active) ? 'active': '';
}
export default Ember.Helper.helper(activeClass);
