# Sample angular1 module

Contains a directive, a service and a filter. Dummy implementations. Intended for testing ngUpgrade and angular2.

## API

Require this module and call the exported function with an angular instance as argument.

    const angular1 = require('angular');
    const moduleFactory = require('@gszabo/sample-ng1-module');
    
    moduleFactory(angular1); // now the sample module is registered as 'helloModule'
