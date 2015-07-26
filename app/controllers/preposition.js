import Ember from "ember";

export default Ember.Controller.extend({
  needs: ['preposition/word'],

  word: function() {
    var controller = this.get('controllers.preposition/word');
    return controller.get('model.query');
  }.property('controllers.preposition/word'),

  actions: {
    lookupWord: function(word) {
      this.transitionToRoute('preposition.word', word);
    }
  }
});
