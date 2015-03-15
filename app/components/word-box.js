import Ember from "ember"

export default Ember.Component.extend({
  word: '',

  actions: {
    click: function(tag, key) {
      // TODO: Move this logic to the server
      var tags = this.get('word.tags')
      var word_class = this.get('word.word_class')
      var res = '';

      for(var type in tags) {
        if(type === tag) {
          res += key
        } else {
          for(let key in tags[type]) {
            if(tags[type][key]) {
              res += key
            }
          }
        }

        if(word_class === 'to' && type === 'gender') {
          res += '_'
        } else {
          if(word_class === 'so' || type === 'degree' || type === 'gender') {
            res += '-'
          }
        }
      }

      if(res.endsWith('-')) {
        res = res.slice(0, -1) // remove trailling -
      }

      if(word_class === 'to') {
        // all numberals are plural
        res += 'FT'
      }

      this.sendAction('action', this.get('word'), res);
    }
  }
})
