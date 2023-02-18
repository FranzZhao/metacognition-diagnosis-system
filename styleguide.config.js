const webpack = require('webpack');
const path = require('path');

// Styleguidist (v11.2.0) doesn't display components with create ract app 5
// This webpackConfig is a workaround for that
// For more information see https://github.com/styleguidist/react-styleguidist/issues/1910#issuecomment-1013763698

const webpackConfig = {
    // styleguidist wrapper
    module: {
        rules: [
            {
                test: /.\.md$/, // look for .md files in component folder
                type: 'javascript/auto' // Tell webpack to interpret the result from examples-loader as JavaScript
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json' // important to have "noEmit": false in the config
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        // Rewrites the absolute paths to those two files into relative paths
        new webpack.NormalModuleReplacementPlugin(
            /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
            'react-styleguidist/lib/loaders/utils/client/requireInRuntime'
        ),
        new webpack.NormalModuleReplacementPlugin(
            /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
            'react-styleguidist/lib/loaders/utils/client/evalInContext'
        ),
        new webpack.DefinePlugin({
            process: { env: {} }
        })
    ]
};

module.exports = {
    // 设置styleguide的build文件夹
    styleguideDir: 'styleguide/build',
    webpackConfig,
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/components/layout/StyleguidistWrapper')
    },
    propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
        // 属性过滤从其他库extend的，只显示自己增加的属性，[参考](https://github.com/strothj/react-docgen-typescript-loader/issues/66)
        propFilter: (prop) => {
            if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules');
            }
            if (prop.declarations) {
                return !prop.declarations[0].fileName.includes('node_modules');
            }
            return true;
        },
        shouldExtractValuesFromUnion: true,
        shouldExtractLiteralValuesFromEnum: true
    }).parse, // 用来支持 tsx
    verbose: true, // 打印详细信息
    usageMode: 'expand', // 自动打开文档的缩放
    pagePerSection: true, // 是否每页一个组件显示
    title: '元认知诊断系统组件库', // 文档名
    sections: [
        {
            name: '组件库介绍',
            content: 'src/components/introduction.md'
        },
        {
            name: '项目文档',
            href: false,
            sectionDepth: 2,
            sections: [
                {
                    name: '样式指南',
                    content: 'docs/style.md'
                },
                {
                    name: 'API、Mock相关文档',
                    content: 'docs/api.md'
                }
            ]
        },
        {
            name: '基础组件',
            sectionDepth: 2,
            components: 'src/components/common/**/*.{jsx,tsx}',
            usageMode: 'expand'
        },

        {
            name: '业务组件',
            sectionDepth: 2,
            components: 'src/components/business/**/*.{jsx,tsx}',
            usageMode: 'expand'
        },
        {
            name: '布局组件',
            sectionDepth: 2,
            components: 'src/components/layout/**/*.{jsx,tsx}',
            usageMode: 'expand'
        },
        {
            name: '页面组件',
            sectionDepth: 2,
            components: 'src/pages/**/components/**/*.{jsx,tsx}',
            usageMode: 'expand',
            ignore: ['**/modelTree/style/*.{jsx,tsx}']
        }
    ],
    styles: {
        SectionHeading: {
            wrapper: {
                backgroundColor: '#F5F5F5'
            }
        },
        Heading: {
            heading: {
                fontWeight: 'bold',
                color: '#333333'
            }
        },
        Table: {
            cell: {
                borderBottom: '1px solid #eeeeee'
            }
        }
    },
    theme: {
        color: {
            base: '#555555'
        }
    },
    skipComponentsWithoutExample: true,

    moduleAliases: {
        '@': path.resolve(__dirname, './src'),
        '@common': path.resolve(__dirname, 'src/common'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@components': path.resolve(__dirname, 'src/components')
    }
};
