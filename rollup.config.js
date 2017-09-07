import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const input = 'src/urlShaper.js';

export default [
  // browser-friendly UMD build
	{
		input,
    output: {
      file: './dist/bundle.umd.js' ,
      format: 'umd'
    },
		name: 'urlShaper',
		plugins: [
      babel({
				exclude: 'node_modules/**',
			}),
			uglify()
		]
	},
]
