import Ember from "ember";

export default Ember.Controller.extend({
  needs: ['verb/word'],

  word: function() {
    let params = this.get('container').lookup('router:main').router.currentHandlerInfos
        .findBy('name','verb.word');

    return params ? params.params.word : '';
  }.property('model'),

  actions: {
    lookupWord: function(word) {
      this.transitionToRoute('verb.word', word);
    }
  }
});
