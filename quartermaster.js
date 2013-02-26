#!/usr/bin/env node
var argv = require('optimist').argv;

/*jslint sloppy:true */
(function() {
  var requirejs = require('requirejs');

  if ( !(requirejs && requirejs.tools) ) { return; }

  // Using quartermaster context to not conflict
  requirejs.tools.useLib('quartermaster', function(require) {
    console.log(require('build'));
  });

}());
