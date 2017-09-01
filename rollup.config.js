import resolve from 'rollup-plugin-node-resolve'; // remove if not using any external modules
import commonjs from 'rollup-plugin-commonjs'; // remove if not using any external modules 
import babel from 'rollup-plugin-babel';

export default [
// browser-friendly UMD build
  	{
  		entry: 'src/main.js',
  		dest: 'dist/bundle.umd.js',
  		format: 'umd',
  		moduleName: 'howLongUntilLunch',
  		plugins: [
  			resolve(), // so Rollup can find external modules
  			commonjs() // so Rollup can convert `ms` to an ES module
  		]
  	},

  	// CommonJS (for Node) and ES module (for bundlers) build.
  	// (We could have three entries in the configuration array
  	// instead of two, but it's quicker to generate multiple
  	// builds from a single configuration where possible, using
  	// the `targets` option which can specify `dest` and `format`)
  	{
  		entry: 'src/main.js',
  		targets: [
  			{
          dest: 'dist/bundle.cjs.js',
          format: 'cjs'
        },
  			{
          dest: 'dist/bundle.esm.js',
          format: 'es'
        }
  		]
  	}
]
