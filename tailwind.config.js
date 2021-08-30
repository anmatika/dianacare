module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',

    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans'],
      },
      typography: {
        'xs': {
          css: {
            fontSize: '0.7rem',
            h1: {
              fontSize: '1.3rem',
            },
          },

        },
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
      backgroundImage: theme => ({
        'hero-home': "url('/images/hero-koti.png')",
        'hero-about': "url('/images/hero-tietoameista.jpg')",
      })
    },
  },
  variants: {
    extend: { },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
