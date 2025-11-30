const { build } = require('vite');
const path = require('path');

async function buildFrontend() {
  try {
    const result = await build({
      root: path.resolve(__dirname),
      configFile: path.resolve(__dirname, 'vite.config.js'),
      build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true
      }
    });
    console.log('Frontend build completed successfully!');
    return result;
  } catch (error) {
    console.error('Frontend build failed:', error);
    process.exit(1);
  }
}

buildFrontend();