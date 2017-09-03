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

export { solveOneProblem };
export default solveAllProblems;
