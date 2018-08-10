import Ember from 'ember';

export function activeClass(params) {
  const [ index, active ] = params; // use ES6 destructuring
  console.log('index, active', index, active)
  return (index === active) ? 'active': '';
}
export default Ember.Helper.helper(activeClass);
