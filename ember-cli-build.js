'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        cacheInclude: [/.*\.(css|hbs)$/, /tailwind.config.js$/],
        plugins: [
          {
            module: require('tailwindcss'),
            options: {
              config: './tailwind.config.js',
            },
          },
          require('postcss-nesting'),
          require('autoprefixer'),
        ],
      },
    },
  });

  return app.toTree();
};
