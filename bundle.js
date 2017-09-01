'use strict';

var bar = function bar() {
  return 'baz';
};

var foo = function () {
  return 'u w0t m9';
};

var main = solveAllProblems = function solveAllProblems() {
  console.log(foo(), bar());
};

module.exports = main;
