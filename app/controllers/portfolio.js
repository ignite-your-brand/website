import Ember from 'ember';

export default Ember.Controller.extend({
	sortedPortfolioDate: ['date'],
    sortedPortfolio: Ember.computed.sort('model.portfolio', 'sortedPortfolioDate')
});
