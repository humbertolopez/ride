module.exports = {
  purge: [
    './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ride: {
          DEFAULT: '#04d1e1',
          dark: '#03a2af'
        }
      }
    },
    fontFamily: {
      'dosis':'Dosis, sans-serif',
      'nunito': 'Nunito, sans-serif'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
