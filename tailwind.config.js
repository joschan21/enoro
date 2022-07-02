/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#38bdf8',
        purple: '#818cf8',
        pink: '#ec73b5',
        secondary: '#f472b6',
        darkblue: '#0f172a',
        textcolor: '#aebcd1',
        bordercolor: '#353f4f',
        background: '#121212',
        error: '#CF6679',
        verydark: '#0b1120',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
