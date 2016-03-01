'use strict';

class HelloFilter {

  constructor() {
    this.transform = this.transform.bind(this);
  }

  transform(input) {
    return 'hello ' + input;
  }

  static create() {
    return [() => (new HelloFilter()).transform];
  }

}

module.exports = HelloFilter;
