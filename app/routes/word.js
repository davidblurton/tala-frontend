import Ember from 'ember';
import ajax from 'ic-ajax';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params) {
    if (!params.word) {
      return [];
    }

    var url = `${config.api}/summary/${params.word}`;

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
