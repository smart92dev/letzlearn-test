/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#800080',
      },
      maxWidth: {
        '4/5': '80%',
        '9/10': '90%'
      }
    },
  },
  plugins: [],
}

