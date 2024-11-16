import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/server.ts'],
  noExternal: [''],
  splitting: false,
  bundle: true,
  outDir: './dist',
  clean: true,
  env: { IS_SERVER_BUILD: 'true' },
  loader: { '.json': 'copy' },
  minify: true,
  sourcemap: true
});
