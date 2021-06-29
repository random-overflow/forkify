const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '6rem minmax(100rem,auto)'
      }
    },
    
    colors: {
      corn: {
        DEFAULT: '#fbdb89'
      },
      froly: {
        DEFAULT: '#f48982'
      },
      wood: {
        DEFAULT: '#f9f5f3'
      },
      dorado: {
        DEFAULT: '#615551'
      },
      ebb: {
        DEFAULT: '#f2efee'
      },
      white: colors.white,
    },

    fontFamily: {
      'body': ['Nunito Sans', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}