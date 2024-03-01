const json = require('rollup-plugin-json')
const resolve = require('rollup-plugin-node-resolve')
const nodePolyfills = require('rollup-plugin-node-polyfills')

const commonjs = require('rollup-plugin-commonjs')
const babel = require('@rollup/plugin-babel')
const { terser } = require('rollup-plugin-terser')
// const clear = require('rollup-plugin-clear')

const isUMD = process.env.BUILD === 'umd'
let output = []
if (isUMD) {
  output = [{
    file: 'dist/naapi.umd.js',
    format: 'umd',
    name: 'NAAPI',
    globals: { axios: 'axios' }
  }]
} else {
  output = [{
    file: 'dist/naapi.cjs.js',
    format: 'cjs'
  }, {
    file: 'dist/naapi.esm.js',
    format: 'es'
  }]
}
module.exports = {
  input: 'src/index.js',
  external: isUMD ? [] : ['axios'],
  output: [...output],
  plugins: [
    nodePolyfills(),
    /*  clear({
      targets: ['dist'], 
      watch: true 
    }), */
    json(),
    resolve({
      browser: true
    }),
    commonjs(),
    babel({
      extensions: ['.js', '.ts'],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/env',
          {
            targets: {
              browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
            }
          }
        ]
      ]
    }),

    terser()

  ]

}
