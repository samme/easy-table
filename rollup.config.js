import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

export default [
  {
    input: 'table.js',
    external: ['ms'],
    output: { file: pkg.browser, format: 'umd', name: 'Table' },
    plugins: [commonjs()]
  }
]
