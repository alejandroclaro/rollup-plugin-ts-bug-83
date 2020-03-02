const Path = require('path');

const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@wessberg/rollup-plugin-ts');

const config = {
  treeshake: false,
  plugins: [
    resolve({ 'browser': false, 'preferBuiltins': true }),
    commonjs(),
    typescript({
      'tsconfig': (resolvedConfig) => {
        const config = { ...resolvedConfig };
        config.declarationDir = Path.join(__dirname, 'dist', 'types');
        return config;
      }
    })
  ],
  external: [
  ],
  input: './src/index.ts',
  output: [
    {
      'dir': 'dist',
      'entryFileNames': 'dist/rollup-plugin-ts-bug.cjs.js',
      'format': 'cjs'
    }
  ]
}

export default config;