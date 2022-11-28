/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
  ],
};