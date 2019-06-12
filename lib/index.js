'use strict';

var Compiler = require('./compiler');
var AST = require('./ast.js');
var utils = require('./utils');

function hasKey(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}

function defaultOptions(options) {
  options = options ? options : {};
  return options.required = false;
}

var jsonToSchema = function(json, options) {
  var options = (options && hasKey(options, 'required')) ? options : defaultOptions(options);
  var compiler = new Compiler();
  var ast = new AST();
  ast.build(json, options);
  compiler.compile(ast.tree);
  return compiler.schema;
};

module.exports = jsonToSchema;
