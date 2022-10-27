module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
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
        hero: '50vh',
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
        profile_dark_1: '#263043',
        profile_dark_2: '#37465f',
        profile_light_1: '#08a7de',
        profile_gray: '#4c5463',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
