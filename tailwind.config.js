/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
        success: '#763edd',
      },
      borderColor: {
        primary: '#fbfcfc',
        secondary: '#a4c8ff',
        success: '#763edd',
        dark: '#0c121c',
        darkblue: '#242c48',
        emphasize: '#333e62',
      },
      ringColor: {
        primary: '#fbfcfc',
        secondary: '#a4c8ff',
        dark: '#0c121c',
      },
      ringOffsetColor: {
        primary: '#121626',
        secondary: '#242c48',
        bright: '#a4c8ff',
        success: '#763edd',
      },
      fill: {
        primary: '#fbfcfc',
        secondary: '#a4c8ff',
        dark: '#0c121c',
      },
      stroke: {
        primary: '#fbfcfc',
        secondary: '#a4c8ff',
        dark: '#0c121c',
      },
      minWidth: {
        screen: '100vw',
      },
      minHeight: {
        screen: '100vh',
      },
      borderWidth: {
        1: '1px',
        3: '3px',
      },
    },
  },
  plugins: [],
};
