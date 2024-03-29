import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  plugins: [typescript()],
  output: {
    dir: './build',
    format: 'umd',
    name: 'error-handler-e2',
  },
};
