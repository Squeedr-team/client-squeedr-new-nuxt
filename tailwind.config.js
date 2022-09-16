module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
      },
      height: {
        hero: '70vh',
      },
      colors: {
        darkPrimaryColor: '#263043',
        lightPrimaryColor: 'rgba(38, 48, 67, 0.8392156862745098)',
        mainLight: '#37465f',
        greyColor: '#e6e6e6',
        borderColor: '#aebaca',
        darkGreyColor: '#596066',
        paraGreyColor: '#aebaca',
        appLight: '#29BDEF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
