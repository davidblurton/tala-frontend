import Ember from "ember"

export default Ember.ObjectController.extend({
  queryParams: ['grammar_tag', 'word_class'],
  grammar_tag: '',
  word_class: '',
  word: '',

  actions: {
    lookupWord: function(word) {
      this.transitionToRoute('word', word)
    },

    filterWord: function(word, grammar_tag) {
      this.set('word_class', word.word_class)
      this.set('grammar_tag', grammar_tag)
    }
  }
})
