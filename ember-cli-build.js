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
              config: './tailwind.config.js', // Chemin vers ton fichier de configuration Tailwind
            },
          },
          require('autoprefixer'), // Ajoute Autoprefixer sans options spécifiques
        ],
      },
    },
  });

  return app.toTree();
};
