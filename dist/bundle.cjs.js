'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const bar = () => 'baz';



var foo = function () {
  return 'u w0t m9';
};

const solveOneProblem = () => {
  console.log('one problem has been solved');
};

function solveAllProblems () {
  console.log(foo(), bar());
}

exports.solveOneProblem = solveOneProblem;
exports['default'] = solveAllProblems;
