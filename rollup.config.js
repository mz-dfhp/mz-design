// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'packages/components/index.ts',
  output: [
    {
      file: './packages/mz-design/dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
      globals: {
        react: 'React'
      }
    },
    {
      file: './packages/mz-design/dist/index.esm.js',
      format: 'esm',
      globals: {
        react: 'React'
      }
    },
    {
      file: './packages/mz-design/dist/index.umd.js',
      format: 'umd',
      name: 'mz-design',
      globals: {
        react: 'React'
      }
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './packages/mz-design/tsconfig.json'
    }),
    terser()
  ],
  external: ['react', 'react-dom']
}
