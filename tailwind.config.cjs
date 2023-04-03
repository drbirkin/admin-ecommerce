/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        whitesmoke: '#fafbfc',
        'light-blue': '#f0f7fd',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['group-focus'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
