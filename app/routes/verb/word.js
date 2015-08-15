import Ember from 'ember';
import ajax from 'ic-ajax';
import config from '../../config/environment';

export default Ember.Route.extend({
  model(params) {
    var url = `${config.api}/verb/${params.word}?lang=en`;
    return ajax(url);
  }
});
