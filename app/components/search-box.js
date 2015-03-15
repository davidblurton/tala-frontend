import Ember from "ember"

export default Ember.Component.extend({
  word: '',
  actions: {
    search: function() {
      this.sendAction('action', this.get('word'));
    }
  }
})
