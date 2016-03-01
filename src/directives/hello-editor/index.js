'use strict';

class HelloEditorDirective {

  constructor(hello) {
    this._hello = hello;
    this._texts = [];
  }

  ngOnInit() {
    this._hello.load().then(result => this._texts = result);
  }

  get texts() {
    return this._texts;
  }

  static create() {
    return [() => ({
      restrict: 'E',
      bindToController: true,
      scope: {
        helloText: '='
      },
      template: require('./index.jade')(),
      controllerAs: 'ctrl',
      controller: ['hello', HelloEditorDirective],
      link: function(scope, element, attributes, controller) {
        controller.ngOnInit();
      }
    })];
  }

}

module.exports = HelloEditorDirective;
