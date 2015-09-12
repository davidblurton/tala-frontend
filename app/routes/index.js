import Ember from 'ember';
import ajax from 'ic-ajax';
import config from '../config/environment';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  model(params) {
    if(!params.q) {
      return
    }

    var url = `${config.api}/sentence/?q=${params.q}`;
    return ajax(url);
  }
});
