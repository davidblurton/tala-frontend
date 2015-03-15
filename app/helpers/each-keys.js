import Ember from 'ember';

export function keys(obj) {
  return Object.keys(obj);
}

export default Ember.Handlebars.makeBoundHelper(keys);
