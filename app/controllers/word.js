import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    lookupWord: function(word) {
      this.transitionToRoute('word', word);
    }
  }
});
