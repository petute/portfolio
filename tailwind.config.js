const theme = {
  colors: {
    neobrutalism: {
      green: '#B0CDAF',
      red: '#E47C84',
      yellow: '#EED256',
    }
  },
  boxShadow: {
    neobrutalism: '4px 4px 0 0 black'
  }
  
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {...theme},
  },
  plugins: [require("@kobalte/tailwindcss"),],
};
