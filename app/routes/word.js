import Ember from 'ember'
import ajax from 'ic-ajax';
import config from '../config/environment';

export default Ember.Route.extend({
  queryParams: {
    grammarTag: { refreshModel: true }
  },

  model(params) {
    var url = `${config.api}/related/${params.word}`

    if(params.grammarTag) {
      url += `?grammarTag=${params.grammarTag}`
    }

    if(params.wordClass) {
      url += `&wordClass=${params.wordClass}`
    }

    return ajax(url).then(data => {
      return {
        word: params.word,
        results: data.results
      }
    })
  },
  setupController: function(controller, model) {
    controller.set('model', model);

    if(model.results.length > 0) {
      controller.set('word', model.results[0].word_form)
    }
  }
})
