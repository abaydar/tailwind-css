/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customYellow: '#fdc530',
        lightBlue: '#cae9f2',
        darkBlue: '#203b70',
        gradientLightBlue: '#316eab',
        gradientDarkBlue: '#2c3e50'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

