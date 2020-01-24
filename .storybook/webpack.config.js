// .storybook/webpack.config.js
const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    loader: 'babel-loader',
    exclude: /node_modules/,
    test: /\.(js|jsx)$/,
    options: {
      presets: ['@babel/react'],
      plugins: [
        [
          'import',
          {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
          },
        ],
      ],
    },
  });

  config.module.rules.push({
    test: /\.less$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          modifyVars: { '@primary-color': '#f00' },
          javascriptEnabled: true,
        },
      },
    ],
    include: [path.resolve(__dirname, '../src'), /[\\/]node_modules[\\/].*antd/],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
