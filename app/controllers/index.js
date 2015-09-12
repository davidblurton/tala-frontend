import Ember from "ember";

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: null,

  word: Ember.computed.reads('q'),

  actions: {
    lookupWord: function(word) {
      this.set('q', word)
    }
  }
});
