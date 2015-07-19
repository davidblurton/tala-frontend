import Ember from "ember"

export default Ember.ObjectController.extend({
  queryParams: ['grammarTag', 'wordClass'],
  grammarTag: '',
  wordClass: '',
  word: '',

  actions: {
    lookupWord: function(word) {
      this.transitionToRoute('word', word)
    },

    filterWord: function(word, grammarTag) {
      this.set('wordClass', word.wordClass)
      this.set('grammarTag', grammarTag)
    }
  }
})
