import Ember from "ember";

export default Ember.Controller.extend({
  needs: ['adjective/word'],

  word: function() {
    let params = this.get('container').lookup('router:main').router.currentHandlerInfos
        .findBy('name','adjective.word')

    return params ? params.params.word : ''
  }.property('model'),

  actions: {
    lookupWord: function(word) {
      this.transitionToRoute('adjective.word', word);
    }
  }
});
