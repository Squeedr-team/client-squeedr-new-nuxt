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
        primary: {
          DEFAULT:'#29BDEF',
          700:'#08a7de',
          100:'#d8e0fc',
          200:'#F4F5F9',
          900:'#0B2A97'
        },
        success: {
          DEFAULT:'#2BC155',
          100:'#e3f9e9'
        },
        profile_dark_1: '#263043',
        profile_dark_2: '#37465f',
        profile_light_1: '#08a7de',
        profile_gray: '#4c5463',
        body_bg:'#F9F9F9',
        dustColor:'#EFEFEF',
        darkDust:'#7e7e7e',
        dustTxtColor:'#B1B1B1',
        danger:{
          DEFAULT:'#F94687'
        },
        warning:{
          DEFAULT:'#FFBC11',
          100:'#fff5dd',
          700:'#eaa800'
        },
        secondary:{
          100:'#EFEFEF',
          300:'#d7dae3',
          400:'#B1B1B1',
          500:'#828690',
          600:'#7e7e7e',
          'DEFAULT':'#3d4465'
        },
        lightBlue:'#0b2a971a'
      },
      borderRadius: {
        '2xl':'1.25rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
