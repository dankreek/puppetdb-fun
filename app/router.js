import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('root', {path: '/'});
    this.route('nodes', {path: '/nodes'});
});

export default Router;
