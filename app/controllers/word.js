import Ember from "ember"

export default Ember.ObjectController.extend({
  queryParams: ['grammar_tag'],
  grammar_tag: '',
  word: '',

  actions: {
    lookupWord: function(word) {
      this.transitionToRoute('word', word)
    },

    filterWord: function(word, grammar_tag) {
      this.set('grammar_tag', grammar_tag)
    }
  }
})
