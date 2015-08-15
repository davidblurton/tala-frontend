import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('verb', function() {
    this.route('word', { path: ':word' });
  });

  this.resource('preposition', function() {
    this.route('word', { path: ':word' });
  });

  this.resource('adjective', function() {
    this.route('word', { path: ':word' });
  });
});

export default Router;
