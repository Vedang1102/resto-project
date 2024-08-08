/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          500: '#f5f5dc',
          600: '#f5deb3',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
