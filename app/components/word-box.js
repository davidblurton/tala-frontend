import Ember from "ember"

export default Ember.Component.extend({
  word: '',

  actions: {
    click: function(tag, key) {
      // TODO: Move this logic to the server
      var tags = this.get('word.tags')
      var wordClass = this.get('word.wordClass')
      var res = '';

      for(var type in tags) {
        if(type === tag) {
          res += key
        } else {
          for(let k in tags[type]) {
            if(tags[type][k]) {
              res += k
            }
          }
        }

        if(wordClass === 'to' && type === 'gender') {
          res += '_'
        } else {
          if(wordClass === 'so' || type === 'degree' || type === 'gender') {
            res += '-'
          }
        }
      }

      if(res.endsWith('-')) {
        res = res.slice(0, -1) // remove trailling -
      }

      if(wordClass === 'to') {
        // all numberals are plural
        res += 'FT'
      }

      this.sendAction('action', this.get('word'), res);
    }
  }
})
