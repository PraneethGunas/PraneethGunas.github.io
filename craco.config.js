const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#F4AE2B',
              '@link-color': ' #F4AE2B', // link color
              '@heading-color': 'rgba(244, 174, 43, .85)', // heading text color
              '@text-color': 'rgba(244, 174, 43, 0.65)', // major text color
              '@text-color-secondary': 'rgba(244, 174, 43, 0.45)', // secondary text color
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
