/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'mal-blue': '#2e51a2',
        'mal-lightblue': '#abc4ed',
        'mal-dark': '#121212',
        'mal-lightdark': '#333333',
        'mal-semidark': '#181818'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
