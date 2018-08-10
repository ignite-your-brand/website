import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        selectCategory: function(item) {
            Ember.$('.category-button').removeClass('active');
            Ember.$('.' + item).addClass('active');
            this.transitionTo('/portfolio?category=' + item);
            this.set('activeCategory', item);
            Ember.$('#portfolio-holder').fadeOut('fast', function() {
                Ember.$('#portfolio-holder').fadeIn('slow');
            });
        }
    },
    nesto: Ember,
    activeCategory: '',
    queryParams: {
        category: { refreshModel: true }
    },
    model(params) {
        return Ember.RSVP.hash({
            content: this.get('store').query('portfolioPage', {'fields.slug': 'portfolio'}).then(function(array) {
              return array.get('firstObject');
            }),
            categories: this.get('store').query('categories', {}).then(results => results.filter((category) => {
                var array = category.get('categories').split(',');
                return array;
            })),
            projects: this.get('store').query( 'project', { 'fields.category': params.category}).then((array) => {
                return array;
            }),
        });
    },

    setupController( controller, model ) {
        this._super(controller, model);
        controller.set('projects', model.projects);
        this.transitionTo('/portfolio?category=all');

         model.categories.forEach((category) => {
            controller.set('categories', category.get('categories').split(','));
            var array = category.get('categories').split(',');
            return array;
        });

    }
});
