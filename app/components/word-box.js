import Ember from "ember"

export default Ember.Component.extend({
  word: '',

  actions: {
    click: function(tag, key) {
      var tags = this.get('word.tags')
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
      }

      this.sendAction('action', this.get('word'), res);
    }
  }
})
