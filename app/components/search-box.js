import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    search: function() {
      this.sendAction('action', this.get('word'));
    }
  },

  didInsertElement: function() {
    this.$('input').focus();
  }
});
