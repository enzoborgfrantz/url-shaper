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
      file: './dist/bundle.umd.js' ,
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
		// CommonJS (for Node) and ES module (for bundlers) build.
		// (We could have three entries in the configuration array
		// instead of two, but it's quicker to generate multiple
		// builds from a single configuration where possible, using
		// the `targets` option which can specify `dest` and `format`)
		{
			input,
			output: [
				{
	        file: 'dist/bundle.cjs.js',
	        format: 'cjs'
	      },
				{
	        file: 'dist/bundle.esm.js',
	        format: 'es'
	      }
			]
		}
]
