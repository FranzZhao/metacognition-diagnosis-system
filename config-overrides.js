const { override, overrideDevServer, watchAll, addWebpackAlias } = require('customize-cra');
const path = require('path');

const devServerConfig = () => (config) => {
    return {
        ...config
    };
};

module.exports = {
    webpack: override(
        (config) => {
            if (process.env?.REACT_APP_MOCK) {
                let entry = config.entry;
                config.entry = [entry, './mock'];
            }
            return config;
        },
        addWebpackAlias({
            '@': path.resolve(__dirname, './src'),
            '@common': path.resolve(__dirname, 'src/common'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@components': path.resolve(__dirname, 'src/components')
        })
    ),
    devServer: overrideDevServer(devServerConfig(), watchAll())
};
