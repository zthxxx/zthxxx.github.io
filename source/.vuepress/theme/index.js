// ts module `src` for dev
if (!require.extensions['.ts']) {
  require('ts-node').register({
    project: require('path').join(__dirname, 'tsconfig.json'),
    compilerOptions: {
      module: 'commonjs',
    },
  })
}
const index = require('./config').default
module.exports = index
