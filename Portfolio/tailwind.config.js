/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F8F0', // You can adjust this hex code to your preferred shade of cream
      },
    },
  },
  plugins: [],
}
