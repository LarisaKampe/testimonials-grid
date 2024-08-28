/** @type {import('tailwindcss').Config} */
module.exports = {
  // Content Configuration
  content: [
    "./**/*.{html,js}"
  ],

  // Theme Configuration
  theme: {
    // Extend the default theme
    extend: {
      // Custom Colors
      colors: {
        primary: {
          moderateViolet: '#7541c8',
          darkGrayBlue: '#48556a',
          darkBlackBlue: '#19212e',
        },
        neutral: {
          lightGray: '#cfcfcf',
          lightGrayBlue: '#ecf2f8',
        },
      },

      // Custom Font Family
      fontFamily: {
        sans: [
          'Barlow Semi Condensed',
          'sans-serif',
        ],
      },
    },
  },

  // Plugin Configuration
  plugins: [],
};