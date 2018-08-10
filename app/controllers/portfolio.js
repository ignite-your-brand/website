import Ember from 'ember';

export default Ember.Controller.extend({
    sortedPortfolioDate: ['date'],
    queryParams: 'category',
    category: '',
    sortedPortfolio: Ember.computed.sort('model.portfolio', 'sortedPortfolioDate'),
    selectCategory: function() {
        console.log('cao maco');
    }
});
