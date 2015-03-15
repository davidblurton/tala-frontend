import Ember from 'ember';

export function json(input) {
  return `<pre>${JSON.stringify(input, null, 2)}</pre>`;
}

export default Ember.Handlebars.makeBoundHelper(json);
