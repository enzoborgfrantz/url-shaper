import foo, { bar, biz } from './foo.js';

export const solveOneProblem = () => {
  console.log('one problem has been solved');
}

export default function solveAllProblems () {
  console.log(foo(), bar());
};
