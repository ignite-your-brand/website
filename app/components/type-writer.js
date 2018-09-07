import Ember from 'ember';

const START_DELAY = 350;
const WRITE_CHARACTER_DELAY = 60;
const DELETE_CHARACTER_DELAY = 50;
const PAUSE_BETWEEN_TITLES = 750;

export default Ember.Component.extend({
    classNames: ['type-writer'],
    titles: [],
    title: '',
    titleIndex: null,
    isTyping: false,
    triggerTyping: Ember.observer('titleIndex', function () {
        let titleIndex = this.get('titleIndex');
        if ( ! isNaN( titleIndex ) ) {
            this.typing( titleIndex );
            this.setState( 'typing' );
        }
    }),
    isDeleting: false,
    triggerDeletion: Ember.observer('title', 'titleIndex', 'titles', function () {
        let titleIndex = this.get('titleIndex'),
            title = this.get('title'),
            titles = this.get('titles');
        if ( title.length === titles[titleIndex].length && titleIndex < titles.length - 1 ) {
            Ember.run.later(this, function () {
                this.deleting( titleIndex );
                this.setState( 'deleting' );
            }, PAUSE_BETWEEN_TITLES);
        }
    }),
    triggerNextTitle: Ember.observer('title', 'isDeleting', function () {
        if ( this.get('isDeleting') && this.get('title').length === 0 ) {
            Ember.run.later(this, function () {
                this.set('titleIndex', this.get('titleIndex') + 1);
            }, START_DELAY);
        }
    }),
    setState( state ) {
        this.set('isTyping', false);
        this.set('isDeleting', false);
        switch ( state ) {
            case 'deleting':
                this.set('isDeleting', true);
                break;
            case 'typing':
                this.set('isTyping', true);
                break;
        }
    },
    typing( titleIndex ) {
        let titles = this.get('titles');
        this.setCharacters( this.$('.type-area'), titles[titleIndex], 1, 1 );
    },
    deleting( titleIndex ) {
        let titles = this.get('titles');
        this.setCharacters( this.$('.type-area'), titles[titleIndex], titles[titleIndex].length, -1 );
    },
    setCharacters( element, string, characterIndex, increment ) {
        let delay = increment > 0 ? WRITE_CHARACTER_DELAY : DELETE_CHARACTER_DELAY;
        this.set('title', string.substring(0, characterIndex));
        if ( characterIndex >= 0 && characterIndex <= string.length ) {
            Ember.run.later(this, function () {
                this.setCharacters( element, string, characterIndex + increment, increment );
            }, delay);
        }
    },

    willDestroyElement() {
        console.log("CANCEL IT HERE!")
        Ember.run.cancel(this._debouncedItem);
    },

    didInsertElement() {
        this._debouncedItem = Ember.run.later(this, function () {
            this.set('titleIndex', 0);
        }, START_DELAY);
    }
});
