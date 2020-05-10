// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/master/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    sourceDir: './src/client',
    moduleDir: './src/client/modules',

    resources: [
        { from: 'src/client/resources', to: 'dist/resources/' },
        { from: 'src/resources', to: 'dist/resources' },
        {
            from: 'node_modules/@salesforce-ux/design-system/assets',
            to: 'src/SLDS'
        },
        {
            from: 'node_modules/@salesforce-ux/design-system/assets',
            to: 'dist/SLDS'
        }
    ],
    // Default server options for serve command
    server: {
        port: 3002,
        host: 'localhost',
        open: false,
        customConfig: './src/server/api.js'
    },
    // Default webpack server options for watch command
    devServer: {
        port: 3001,
        host: 'localhost',
        open: false,
        stats: 'errors-only',
        noInfo: true,
        contentBase: './src/client'
    }
};
