/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      fontFamily: {
        Poppins: 'Poppins',
      },
      backgroundColor: {
        primary: '#121626',
        secondary: '#242c48',
        bright: '#a4c8ff',
        success: '#763edd',
      },
      textColor: {
        primary: '#fbfcfc',
        secondary: '#a4c8ff',
        dark: '#0c121c',
      },
      fill: {
        primary: '#fbfcfc',
        secondary: '#a4c8ff',
        dark: '#0c121c',
      },
    },
  },
  plugins: [],
};
