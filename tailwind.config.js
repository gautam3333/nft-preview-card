/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'soft-blue': '#8bacda',
      cyan: '#00fff7',
      'very-dark-blue-main': '#0d192b',
      'very-dark-blue-card': '#14253d',
      'very-dark-blue-line': '#2f415b',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
};
