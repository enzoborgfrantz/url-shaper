// import resolve from 'rollup-plugin-node-resolve'; // remove if not using any external modules
// import commonjs from 'rollup-plugin-commonjs'; // remove if not using any external modules
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const input = 'src/main.js';

export default [
  // browser-friendly UMD build
	{
		input,
    output: {
      file: './dist/bundle.js' ,
      format: 'umd'
    },
		name: 'testFunction',
		plugins: [
			// resolve(), // so Rollup can find external modules
			// commonjs(), // so Rollup can convert `ms` to an ES module
      babel({
				exclude: 'node_modules/**',
			}),
			// so Rollup can use babel to transpile to es5
			uglify()
		]
	},
]
