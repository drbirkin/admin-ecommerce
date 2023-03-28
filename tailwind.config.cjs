/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors : {
        'whitesmoke': '#fafbfc'
      },
    },
  },
  variants: {
    extend: {
      textColor: ['group-focus']
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
