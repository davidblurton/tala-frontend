import Ember from "ember";

export default Ember.Controller.extend({
  needs: ['verb/word'],

  word: function() {
    var controller = this.get('controllers.verb/word');
    return controller.get('model.query');
  }.property('controllers.verb/word'),

  actions: {
    lookupWord: function(word) {
      this.transitionToRoute('verb.word', word);
    }
  }
});
