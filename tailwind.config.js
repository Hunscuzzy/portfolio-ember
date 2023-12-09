/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  purge: ['./app/**/*.hbs', './app/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [],
};
