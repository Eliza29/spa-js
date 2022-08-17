// postcss.config.js
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
      'postcss-preset-env',
      tailwindcss
    ]
}
// import tailwindcss from 'tailwindcss';
// export const plugins = [tailwindcss];