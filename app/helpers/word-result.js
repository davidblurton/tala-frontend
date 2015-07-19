import Ember from 'ember';

export function helper(obj = {}) {
  return Object.keys(obj).map(key => {
    return {
      key: key,
      value: obj[key]
    };
  });
}

export default Ember.Handlebars.makeBoundHelper(helper);
