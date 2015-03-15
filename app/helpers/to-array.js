import Ember from 'ember';

export function helper(prop, arr) {
  var results = []

  for(var key in arr[prop]) {
    results.push({
      key: key,
      value: arr[prop][key]
    })
  }

  return results
}

export default Ember.Handlebars.makeBoundHelper(helper);
