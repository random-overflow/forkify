const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '6rem minmax(100vh,auto)'
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
      black: colors.black
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
