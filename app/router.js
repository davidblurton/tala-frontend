import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('verb', function() {
    this.route('word', {path: ':word'});
  });
  this.route('preposition', { path: '/preposition/:word' });
});

export default Router;
