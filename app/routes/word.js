import Ember from 'ember'
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  queryParams: {
    grammar_tag: { refreshModel: true }
  },

  model(params) {
    var url = `http://localhost:8000/api/${params.word}`

    if(params.grammar_tag) {
      url += `/filter?grammar_tag=${params.grammar_tag}`
    }

    if(params.word_class) {
      url += `&word_class=${params.word_class}`
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
