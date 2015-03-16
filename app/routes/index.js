import Ember from 'ember'
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('/dagur')
  }
})
