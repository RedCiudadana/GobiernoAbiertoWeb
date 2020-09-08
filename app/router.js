import EmberRouter from '@ember/routing/router';
import config from 'gobiernoabierto-webpage/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('que-es');
  this.route('planes-de-accion');
  this.route('tablero');
  this.route('encuentro');
});
