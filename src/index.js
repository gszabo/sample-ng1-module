'use strict';

module.exports = angular => {

  angular.module('helloModule', [])
    .service('hello', require('./services/hello').create())
    .filter('hello', require('./filters/hello').create())
    .directive('helloEditor', require('./directives/hello-editor').create());

};
