import Ember from 'ember';
import ajax from 'ic-ajax';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params) {
    var split = params.word.replace(' ', '/');
    var url = `${config.api}/verb/${split}`;

    return ajax(url).then(data => {
      return {
        word: params.word,
        results: data
      };
    });
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('word', model.word);
  }
});
