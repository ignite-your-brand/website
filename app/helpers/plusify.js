import Ember from 'ember';

export function plusify(params) {
	return params[0].replace(/,/g, ' + ');
}

export default Ember.Helper.helper(plusify);
