import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: "target/classes/META-INF/resources/webjars/cloud-ui-ui5/0.4.1",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ui5-wc-lib',
      // the proper extensions will be added
      fileName: 'ui5-wc-lib',
    },
  },
})