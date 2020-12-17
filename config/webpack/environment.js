const { environment } = require('@rails/webpacker')

const typescriptLoader = {
    test: /.(ts|tsx)$/,
    loader: 'ts-loader'
}

environment.loaders.append('typescript', typescriptLoader);

module.exports = environment
