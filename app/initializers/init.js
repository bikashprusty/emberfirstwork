export function initialize(app/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  console.log("In initializer");
  app.inject('route', 'start', 'service:start');
  app.inject('controller', 'start', 'service:start');
}

export default {
  name: 'init',
  initialize: initialize
};
