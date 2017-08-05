import { readFileSync } from 'fs'
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import nodeResolve from 'rollup-plugin-node-resolve'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

const banner = readFileSync('./banner.js', 'utf-8')
  .replace('${version}', pkg.version)

export default {
  entry: 'index.js',
  targets: [
    { dest: pkg.main, format: 'cjs' },
    { dest: pkg.module, format: 'es' }
  ],
  plugins: [
    eslint(),
    nodeResolve(),
    babel()
  ],
  banner,
  external: [
    'pg'
  ]
}
