'use strict';

class HelloService {

  constructor($q, $timeout) {
    this._$q = $q;
    this._$timeout = $timeout;
  }

  load() {
    return new this._$q((resolve) => {
      this._$timeout(function() {
        resolve(['a', 'b', 'c']);
      }, 5000);
    });
  }

  static create() {
    return ['$q', '$timeout', HelloService];
  }

}

module.exports = HelloService;
