const angular = require('angular');

const ngModule = angular.module('webpack-demo', []);

// if (ON_TEST) {
  require('angular-mocks/ngMock');
// }

require('./directives')(ngModule);